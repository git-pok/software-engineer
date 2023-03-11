const express = require('express');
const router = new express.Router();
const ExpressError = require('../express-error.js');
const items = require('../fakeDb.js');
const { addToArray, createItemObj } = require('../shoplist-app-methods.js');


router.get('/', (req, res)=> {
    res.status(200).json({ items });
});



router.post('/', (req, res, next)=> {
    const name = req.body.name;
    const price = req.body.price;
    const foundItem = items.find((item) => item.name === name);

    try {
        if (!req.body.name) throw new ExpressError("Name is required", 400);
        else if (foundItem) throw new ExpressError("Name already exists", 400)
        else {
            const added = createItemObj(name, price);
            addToArray(added, items);
            res.status(201).json({ added });
        }
    } catch(e) {
        return next(e);
    }
});



router.get('/:name', (req, res, next)=> {
    const nameParams = req.params.name;
    const foundItem = items.find((item) => item.name === nameParams); 
    try {
        if (!foundItem) throw new ExpressError(`Item: ${nameParams}, Not Found`, 404);
        else return res.status(200).json({ item: foundItem }); 
    } catch(e) {
        return next(e);
    }
});



router.patch('/:name', (req, res, next)=> {
    const nameParams = req.params.name;
    const foundItem = items.find((item) => item.name === nameParams);
    const itemNameParam = req.body.name;
    const itemPriceParam = req.body.price;
    try {
        if (!foundItem) throw new ExpressError(`Item: ${nameParams}, Not Found`, 404);
        else {
            foundItem.name = itemNameParam ? itemNameParam : foundItem.name;
            foundItem.price = itemPriceParam ? itemPriceParam : foundItem.price;
            return res.status(200).json({ updated: foundItem });
        }; 
    } catch(e) {
        return next(e);
    }
});



router.delete('/:name', (req, res, next)=> {
    const paramsName = req.params.name;
    const foundItemIndx = items.findIndex((obj) => obj.name === paramsName);

    try {
        if (foundItemIndx === -1) throw new ExpressError(`Item: ${paramsName}, Not Found`, 404);
        else {
            items.splice(foundItemIndx, 1);            
            return res.status(200).json({ message: `Deleted ${paramsName}!` });
        }; 
    } catch(e) {
        return next(e);
    }
});



module.exports = router;