/** Middleware for handling req authorization for routes. */

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const Message = require('../models/message.js');

/** Middleware: Authenticate user. */

function authenticateJWT(req, res, next) {
  try {
    const tokenFromBody = req.body._token;
    const payload = jwt.verify(tokenFromBody, SECRET_KEY);
    req.user = payload; // create a current user
    return next();
  } catch (err) {
    return next();
  }
}

/** Middleware: Requires user is authenticated. */

function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    return next({ status: 401, message: "Unauthorized" });
  } else {
    return next();
  }
}

/** Middleware: Requires correct username. */

function ensureCorrectUser(req, res, next) {
  try {
    if (req.user.username === req.params.username) {
      return next();
    } else {
      return next({ status: 401, message: "Unauthorized" });
    }
  } catch (err) {
    // errors would happen here if we made a request and req.user is undefined
    return next({ status: 401, message: "Unauthorized" });
  }
}

// ADDED MIDDLEWARE THAT STARTS ON LINE 46
async function ensureCorrectMsgUser(req, res, next) {
  try {
    const idParams = req.params;
    const { id } = idParams;
    const msgDtl = await Message.get(id);
    const fromUser = msgDtl.from_user.username;
    const toUser = msgDtl.to_user.username;

    if (req.user.username === fromUser || req.user.username === toUser) {
      return next();
    } else {
      return next({ status: 401, message: "Unauthorized" });
    }
  } catch (err) {
    // errors would happen here if we made a request and req.user is undefined
    return next({ status: 401, message: "Unauthorized" });
  }
}

// ADDED MIDDLEWARE THAT STARTS ON LINE 66
async function ensureCorrectMsgRecipient(req, res, next) {
  try {
    const idParams = req.params;
    const { id } = idParams;
    const msgDtl = await Message.get(id);
    const toUser = msgDtl.to_user.username;

    if (req.user.username === toUser) {
      return next();
    } else {
      return next({ status: 401, message: "Unauthorized" });
    }
  } catch (err) {
    // errors would happen here if we made a request and req.user is undefined
    return next({ status: 401, message: "Unauthorized" });
  }
}
// end

module.exports = {
  authenticateJWT,
  ensureLoggedIn,
  ensureCorrectUser,
  ensureCorrectMsgUser,
  ensureCorrectMsgRecipient
};
