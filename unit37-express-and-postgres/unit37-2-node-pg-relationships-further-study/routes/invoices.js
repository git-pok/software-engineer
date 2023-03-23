const express = require('express');
const ivcRouter = new express.Router();
const ExpressError = require('../expressError.js');
const db = require("../db.js");
const { selectAllFromDatabase, queryInvoiceTableById, queryCompanyTableByCode } = require('../app-methods.js');
const { addToInvoicesDatabase, updateInvoicesDatabaseRow, deleteInvoicesTableRow } = require('../app-methods.js');


ivcRouter.get('/', async (req, res)=> {
    try {
        const results = await selectAllFromDatabase('invoices');
        const invoices = results.rows; 
        // console.log(results.rows);
        res.json({ invoices }).status(200);
    } catch(e) {
        next(e);
    }
});


ivcRouter.get('/:id', async (req, res, next)=> {
    try {
        const idVariable = req.params; 
        const { id } = idVariable;
        const results = await queryInvoiceTableById(id);
        const resultsLength = results.rows.length;
        if (resultsLength === 0) throw new ExpressError("Invoice not found.", 404);
        const [ invoice ] = results.rows;
        const { comp_code } = invoice;
        const companyQuery = await queryCompanyTableByCode(comp_code);
        const [ company ] = companyQuery.rows;
        invoice.company = company; 
        res.json({ invoice }).status(200);
    } catch(e) {
        next(e);
    }
});



ivcRouter.post('/', async (req, res, next)=> {
    try {
        const invoice = req.body;
        addToInvoicesDatabase(invoice);
        res.status(201).json({ invoice });
    } catch(e) {
        return next(e);
    }
});

ivcRouter.put('/:id', async (req, res, next)=> {
    try {
        const idVariable = req.params; 
        const { id } = idVariable;
        const reqBody = req.body;
        const updatedInvoice = await updateInvoicesDatabaseRow(reqBody, id);
        const invoiceRow = updatedInvoice.rows;
        const [ invoice ] = invoiceRow;
        const invoiceRowRes = await queryInvoiceTableById(id);
        const invoiceRows = invoiceRowRes.rows; 
        const invoiceRowLength = invoiceRowRes.rows.length;
        if (invoiceRowLength === 0) throw new ExpressError("Invoice not found.", 404);
        res.status(200).json({ invoice });
    } catch(e) {
        return next(e);
    }
});


ivcRouter.delete('/:id', async (req, res, next)=> {
    try {
        const idVariable = req.params; 
        const { id } = idVariable;
        const invoiceRowRes = await queryInvoiceTableById(id);
        const invoiceRows = invoiceRowRes.rows; 
        const invoiceRowLength = invoiceRowRes.rows.length;
        if (invoiceRowLength === 0) throw new ExpressError("Invoice not found.", 404);
        deleteInvoicesTableRow(id);
        res.status(200).json({ status: "Deleted!" });
    } catch(e) {
        return next(e);
    }
});


module.exports = ivcRouter;