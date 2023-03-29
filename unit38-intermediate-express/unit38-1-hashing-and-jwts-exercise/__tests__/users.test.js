const db = require("../db");
const User = require("../models/user");
const Message = require("../models/message");
const ExpressError = require('../expressError.js');

// NONE OF THE TESTS WORKED.
// I HAD TO DEBUG AND FIX THEM ALL.
describe("Test User class", function () {
  beforeEach(async function () {
    await db.query("DELETE FROM messages");
    await db.query("DELETE FROM users");
    // ADDED LINE 11-18
    let u = await User.register(
      "test",
      "password",
      "Test",
      "Testy",
      "+14155550000",
      "2023-03-03"
    );
  });

  test("can register", async function () {
    // ADDED LINE 23-30
    let u = await User.register(
      "joel",
      "password",
      "Joel",
      "Burton",
      "+14155551212",
      // Added Line 27, it cant be null.
      "2023-03-03"
    );
     
    expect(u.username).toBe("joel");
  });

  test("can authenticate", async function () {
    let isValid = await User.authenticate("test", "password");
    expect(isValid).toBeTruthy();
  });

  test("can't authenticate", async function () {
    await expect(User.authenticate("test", "wrongpassword")).rejects.toThrowError('Invalid password!');
  });


  test("can update login timestamp", async function () {
    await db.query("UPDATE users SET last_login_at=NULL WHERE username='test'");
    const u = await User.get("test");
    // ADDED LINE 52-58
    const [ data ] = u;
    expect(data.last_login_at).toBe(null);

    User.updateLoginTimestamp("test");
    const u2 = await User.get("test");
    const [ data2 ] = u2;
    expect(data2.last_login_at).not.toBe(null);
  });

  test("can get", async function () {
    let u = await User.get("test");
    const [ data ] = u;
    expect(data).toEqual({
      username: "test",
      first_name: "Test",
      last_name: "Testy",
      phone: "+14155550000",
      last_login_at: expect.any(Date),
      // last_login_at: expect.any(Date),
      join_at: expect.any(Date),
    });
  });

  test("can get all", async function () {
    let u = await User.all();
    expect(u).toEqual([{
      username: "test",
      first_name: "Test",
      last_name: "Testy",
      phone: "+14155550000",
      last_login_at: expect.any(Date),
      join_at: expect.any(Date),
    }]);
  });
});

describe("Test messages part of User class", function () {
  beforeEach(async function () {
    await db.query("DELETE FROM messages");
    await db.query("DELETE FROM users");
    await db.query("ALTER SEQUENCE messages_id_seq RESTART WITH 1");

    let u1 = await User.register(
      "test1",
      "password",
      "Test1",
      "Testy1",
      "+14155550000",
      // ADDED LINE 100, it cant be null.
      "2023-03-03"
    );
    let u2 = await User.register(
      "test2",
      "password",
      "Test2",
      "Testy2",
      "+14155552222",
      // ADDED LINE 110, it cant be null.
      "2023-03-03"
    );
    let m1 = await Message.create({
      from_username: "test1",
      to_username: "test2",
      body: "u1-to-u2"
    });
    let m2 = await Message.create({
      from_username: "test2",
      to_username: "test1",
      body: "u2-to-u1"
    });
  });

  test('can get messages from user', async function () {
    let m = await User.messagesFrom("test1");
    expect(m).toEqual([{
      id: expect.any(Number),
      body: "u1-to-u2",
      sent_at: expect.any(Date),
      read_at: null,
      to_user: {
        username: "test2",
        first_name: "Test2",
        last_name: "Testy2",
        phone: "+14155552222",
      }
    }]);
  });

  test('can get messages to user', async function () {
    let m = await User.messagesTo("test1");
    expect(m).toEqual([{
      id: expect.any(Number),
      body: "u2-to-u1",
      sent_at: expect.any(Date),
      read_at: null,
      from_user: {
        username: "test2",
        first_name: "Test2",
        last_name: "Testy2",
        phone: "+14155552222",
      }
    }]);
  });
});

afterAll(async function() {
  await db.end();
});
