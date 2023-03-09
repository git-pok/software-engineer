const express = require('express');
const app = express();
const ExpressError = require('./express-error.js');
const { mean, split, turnStrToNumsArr, isLetter, median, mode } = require('./calculator-app-methods.js');

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Each route takes a query key of nums which is
// a comma-separated list of numbers. For example,
// if I want to get the mean of 1, 3, 5, and 7,
// that would look like be a GET request to /mean?nums=1,3,5,7.
app.get('/mean', (req, res, next)=> { 
    try {
        if(!req.query.nums) throw new ExpressError("Nums Are Required In Query Data!!!", 400);
        if(isLetter(req.query.nums)) throw new ExpressError(`${req.query.nums}, Contains Letters!`, 400);
        return res.status(400).json({
            "repsonse": {
                "operation": "mean",
                "value": mean(req.query.nums),
            } 
        });
    } catch(e) {
        next(e);
    }
});



app.get('/median', (req, res, next)=> {
    try {
        if(!req.query.nums) throw new ExpressError("Nums Are Required In Query Data!!!", 400);
        if(isLetter(req.query.nums)) throw new ExpressError(`${req.query.nums}, Contains Letters!`, 400);
        return res.status(400).json({
            "repsonse": {
                "operation": "median",
                "value": median(req.query.nums),
            } 
        });
    } catch(e) {
        next(e);
    }
});



app.get('/mode', (req, res, next)=> {
    try {
        if(!req.query.nums) throw new ExpressError("Nums Are Required In Query Data!!!", 400);
        if(isLetter(req.query.nums)) throw new ExpressError(`${req.query.nums}, Contains Letters!`, 400);
        return res.status(400).json({
            "repsonse": {
                "operation": "mode",
                "value": mode(req.query.nums),
            } 
        });
    } catch(e) {
        next(e);
    }
});



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



app.listen(3000, ()=> {
    console.log('Welcome! App created, visit port 3000!');
});