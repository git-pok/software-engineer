// CREATED ALL LOGIC IN THIS FILE
const express = require('express');
const mRouter = new express.Router();
const ExpressError = require('../expressError.js');
const Message = require('../models/message.js');
const { ensureLoggedIn, ensureCorrectMsgUser, ensureCorrectMsgRecipient } = require('../middleware/auth.js');

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/

mRouter.get('/:id', ensureCorrectMsgUser, async (req, res, next)=> {
    try {
        const messageIdParam = req.params;
        const { id } = messageIdParam;
        const message = await Message.get(id);
        return res.json({ message });
    } catch (e) {
        next(e);
    }
});


/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/
mRouter.post('/', ensureLoggedIn, async (req, res, next)=> {
    try {
        const reqBody = req.body;
        const { from_username, to_username, body } = reqBody;
        const message = await Message.create({from_username, to_username, body});
        return res.json({ message });
    } catch (e) {
        return next(e);
    }
});


/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/

mRouter.post('/:id/read', ensureCorrectMsgRecipient, async (req, res, next)=> {
    try {
        const reqParams = req.params;
        const { id } = reqParams;
        const message = await Message.markRead(id);
        return res.json({ message });
    } catch (e) {
        return next(e);
    }
});

module.exports = mRouter;

