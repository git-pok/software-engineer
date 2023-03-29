// CREATED ALL LOGIC IN THIS FILE
const express = require('express');
const auRouter = new express.Router();
const ExpressError = require('../expressError.js');
const User = require('../models/user.js');


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */
auRouter.post('/register', async (req, res, next)=> {
    try {
        const reqBody = req.body;
        const { username, password, first_name, last_name, phone, join_at, last_login_at } = reqBody;
        const user = await User.register(username, password, first_name, last_name, phone, join_at, last_login_at); 
        return res.json(user);
    } catch (e) {
        if (e.code === '23505') {
            return next(new ExpressError("Username already exists!", 400)); 
        }
        return next(e);
    }
});


/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/
auRouter.post('/login', async (req, res, next)=> {
    try {
        const reqBody = req.body;
        const { username, password } = reqBody;
        const loginToken = await User.authenticate(username, password); 
        if (loginToken) {
            await User.updateLoginTimestamp(username);
            return res.json({ status: "Logged In", loginToken });
        } 
    } catch (e) {
        return next(e);
    }
});


module.exports = auRouter; 
