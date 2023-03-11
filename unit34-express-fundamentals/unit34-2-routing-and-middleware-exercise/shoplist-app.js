const express = require('express');
const app = express();
const shoplistRoutes = require('./routes/shoplist-routes.js');
const ExpressError = require('./express-error.js');
// Line 6 is for route handler middleware args.
const middleware  = require('./middleware/middleware.js');



app.use(express.json());
app.use('/items', shoplistRoutes);
// Line 11 is for route handler middleware args.
app.use(middleware.checkForInvalidItem);



// 404 page not fond error handling
app.use((req, res, next)=> {
    const e = new ExpressError('Page Not Found', 404)
    next(e);
});



// Error Handler
app.use((error, req, res, next)=> {
    let status = error.status || 500;
    let message = error.msg;
    return res.status(status).json({
        error: {message, status}
    });
});



module.exports = app;