// CREATED ALL LOGIC IN THIS FILE
const express = require('express');
const coRouter = new express.Router();
const ExpressError = require('../expressError.js');
const User = require('../models/user.js');
const { ensureLoggedIn, ensureCorrectUser } = require('../middleware/auth.js');
/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/
coRouter.get('/', ensureLoggedIn, async (req, res, next)=> {
    try {
        const users = await User.all();
        return res.json(users);
    } catch (e) {
        next(e);
    }
});


/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/
coRouter.get('/:username', ensureCorrectUser, async (req, res, next)=> {
    try {
        const usernameParam = req.params;
        const { username } = usernameParam; 
        const users = await User.get(username);
        const [ userObj ] = users;
        return res.json({ user: userObj });
    } catch (e) {
        next(e);
    }
});


/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

coRouter.get('/:username/to', ensureCorrectUser, async (req, res, next)=> {
    try {
        const usernameParam = req.params;
        const { username } = usernameParam; 
        const users = await User.messagesTo(username);
        return res.json({ messages: users });
    } catch (e) {
        next(e);
    }
});


/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

coRouter.get('/:username/from', ensureCorrectUser, async (req, res, next)=> {
    try {
        const usernameParam = req.params;
        const { username } = usernameParam; 
        const users = await User.messagesFrom(username);
        return res.json({ messages: users });
    } catch (e) {
        next(e);
    }
});

module.exports = coRouter;
