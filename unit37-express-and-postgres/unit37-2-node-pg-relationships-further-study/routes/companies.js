const express = require('express');
const coRouter = new express.Router();
const ExpressError = require('../expressError.js');
const db = require("../db.js");
const { createItemObj, addToCompaniesDatabase, updateCompaniesDatabaseRow } = require('../app-methods.js');
const { queryCompanyTableByCode, deleteCompaniesTableRow } = require('../app-methods.js');
const { selectAllFromDatabase, queryInvoiceTableByCode } = require('../app-methods.js');
const { companiesIndustriesJoinForCompany } = require('../app-methods.js');
const slugify = require('slugify');

coRouter.get('/', async (req, res)=> {
    try {
        const results = await selectAllFromDatabase('companies');
        const companies = results.rows;
        res.json({ companies }).status(200);
    } catch(e) {
        next(e);
    }
});


coRouter.get('/:code', async (req, res, next)=> {
    try {
        const codeVariable = req.params; 
        const { code } = codeVariable;
        const results = await queryCompanyTableByCode(code);
        const [ company ] = results.rows;
        const invoiceRes = await queryInvoiceTableByCode(code);
        const invoices = invoiceRes.rows;
        const industries = await companiesIndustriesJoinForCompany(code);
        if (company === undefined) throw new ExpressError("Company not found.", 404);
        company.invoices = invoices;
        company.industries = industries;  
        res.json({ company }).status(200);
    } catch(e) {
        next(e);
    }
});


coRouter.post('/', (req, res, next)=> {
    try {
        const reqBody = req.body;
        const reqBodyCode = req.body.code;
        const sluggedCode = slugify(reqBodyCode, { replacement: '', lower: true, strict: true });
        const { code, name, description } = reqBody;
        if (!code || !name || !description) throw new ExpressError("Invalid post body.", 400);       
        const company = createItemObj(sluggedCode, name, description);
        addToCompaniesDatabase(company);
        
        res.status(201).json({ company });
    } catch(e) {
        return next(e);
    }
});


coRouter.put('/:code', async (req, res, next)=> {
    try {
        const reqBody = req.body;
        const dbCode = req.params.code;
        const { code, name, description } = reqBody;
        const databaseRow = await queryCompanyTableByCode(dbCode);
        const rows = databaseRow.rows;
        if (rows.length === 0) throw new ExpressError("Company not found.", 404);       
        const companyReqObj = createItemObj(code, name, description);
        const resp = await updateCompaniesDatabaseRow(companyReqObj, dbCode);
        const company = resp.rows[0];
        res.status(200).json({ company });
    } catch(e) {
        return next(e);
    }
});

coRouter.delete('/:code', async (req, res, next)=> {
    try {
        const dbCode = req.params.code;
        const databaseRow = await queryCompanyTableByCode(dbCode);
        const rows = databaseRow.rows;
        if (rows.length === 0) throw new ExpressError("Company not found.", 404);       
        deleteCompaniesTableRow(dbCode);
        res.status(200).json({ status: "Deleted!" });
    } catch(e) {
        return next(e);
    }
});

module.exports = coRouter;