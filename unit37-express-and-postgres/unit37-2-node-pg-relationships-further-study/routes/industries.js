const express = require('express');
const idstrRouter = new express.Router();
const ExpressError = require('../expressError.js');
const db = require("../db.js");
const { selectAllFromDatabase, queryInvoiceTableById, queryCompanyTableByCode } = require('../app-methods.js');
const { addToInvoicesDatabase, updateInvoicesDatabaseRow, deleteInvoicesTableRow } = require('../app-methods.js');
const { companiesIndustriesJoin, addToIndustriesTable } = require('../app-methods.js');



idstrRouter.get('/', async (req, res, next)=> {
    try {
        // const joinQuery = await selectAllFromDatabase('companies_industries');
        // const qMap = joinQuery.rows.map(val => val.industry_code);
        const joinQuery = await selectAllFromDatabase('industries');
        const qMap = joinQuery.rows.map(val => val.code);
        const set = new Set(qMap);
        // console.log('qMap', qMap);
        const arrFromSet = Array.from(set);
        const IndustryCodes = new Map();
        await companiesIndustriesJoin(arrFromSet, IndustryCodes);
        const industryDataObjt = Object.fromEntries(IndustryCodes);
        res.json( industryDataObjt ).status(200);
    } catch(e) {
        next(e);
    }
});


idstrRouter.post('/', async (req, res, next)=> {
    try {
        const industry = req.body;
        addToIndustriesTable(industry);
        res.status(201).json({ industry });
    } catch(e) {
        return next(e);
    }
});


module.exports = idstrRouter;