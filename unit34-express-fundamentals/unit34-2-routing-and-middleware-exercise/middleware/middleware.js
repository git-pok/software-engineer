const express = require('express');
const ExpressError = require('../express-error.js');




function checkForInvalidItem(req, res, next) {
    const nameParams = req.params.name;
    const foundItem = items.find((item) => item.name === nameParams); 
    try {
        if (!foundItem) throw new ExpressError(`Item: ${nameParams}, Not Found`, 404);
        else return next(); 
    } catch(e) {
        return next(e);
    }
}


module.exports = { checkForInvalidItem };