// CREATED ALL LOGIC IN THIS FILE
/** User class for message.ly */
const db = require('../db.js');
const { BCRYPT_WORK_FACTOR } = require('../config.js');
const { SECRET_KEY } = require('../config.js');
const ExpressError = require('../expressError.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/** User of the site. */

class User {

  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register(username, password, first_name, last_name, phone, join_at, last_login_at) {
    if (!(username && password && first_name && last_name && phone && join_at)) {
      throw new ExpressError("All fields required!", 400);
    }

    const hashedPw = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const user = await db.query(`
      INSERT INTO users (username, password, first_name, last_name,
      phone, join_at, last_login_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING username, first_name,
      last_name, phone, join_at, last_login_at;`, [username, hashedPw, first_name, last_name, phone, join_at, last_login_at]
    );
    
    const token = jwt.sign({username}, SECRET_KEY);
    const rows = user.rows;
    const [ data ] = rows;
    const updatedUser = await User.updateLoginTimestamp(username);
    updatedUser.token = token;
    return updatedUser;
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(usernameInpt, passwordInpt) {
    if (!usernameInpt || !passwordInpt) throw new ExpressError("Username and password required!", 400); 
    
    const results = await db.query(`
      SELECT username, password FROM users
      WHERE username=$1;
    `, [usernameInpt]);

    const rows = results.rows[0];

    if (rows) {
      const { username, password } = rows;
      const auth = await bcrypt.compare(passwordInpt, password);
      if (auth) {
        const token = jwt.sign({username}, SECRET_KEY);
        return token;
      } else {
        throw new ExpressError("Invalid password!", 400);
      }
    } else {
      throw new ExpressError("Invalid username/password!", 400);
    }
  }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) {
    const results = await db.query(`
      UPDATE users SET last_login_at = CURRENT_TIMESTAMP
      WHERE username = $1 RETURNING username, first_name, last_name,
      phone, join_at, last_login_at;
    `, [username]);

    const rsltRows = results.rows;
    const [ data ] = rsltRows;
    return data;
  }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() {
    const results = await db.query(`
      SELECT username, first_name, last_name, phone,
      join_at, last_login_at FROM users;
    `);

    const rows = results.rows;
    return rows;
  }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) {
    const results = await db.query(`
      SELECT username, first_name, last_name, phone,
      join_at, last_login_at FROM users
      WHERE username=$1;
    `, [username]);

    const rows = results.rows;
    if (rows.length === 0) throw new ExpressError("User not found!", 400);
    else return rows;
  }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */
  static async messagesFrom(username_from) {
    const combinedJoinData = [];

    const results = await db.query(`
      SELECT m.id, m.from_username, m.to_username, m.body,
      m.sent_at, m.read_at, u.username, u.first_name,
      u.last_name, u.phone FROM messages m JOIN users u
      ON m.to_username = u.username WHERE from_username=$1;
    `, [username_from]);

    const data = results.rows;

    if (data.length === 0) throw new ExpressError("No messages!", 400);

    for (let val of data) {
      combinedJoinData.push({
        id: val.id,
        body: val.body,
        sent_at: val.sent_at,
        read_at: val.read_at,
        to_user: {
          username: val.username,
          first_name: val.first_name,
          last_name: val.last_name,
          phone: val.phone,
        }
      })
    }
    return combinedJoinData;
  }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesTo(username_to) {
    const combinedJoinData = [];

    const results = await db.query(`
      SELECT m.id, m.from_username, m.body,
      m.sent_at, m.read_at, u.username, u.first_name,
      u.last_name, u.phone FROM messages m JOIN users u
      ON m.from_username = u.username WHERE to_username=$1;
    `, [username_to]);

    const data = results.rows;

    if (data.length === 0) throw new ExpressError("No messages!", 400);

    for (let val of data) {
      combinedJoinData.push({
        id: val.id,
        body: val.body,
        sent_at: val.sent_at,
        read_at: val.read_at,
        from_user: {
          username: val.username,
          first_name: val.first_name,
          last_name: val.last_name,
          phone: val.phone,
        }
      })
    }
    return combinedJoinData;
  }
}


module.exports = User;