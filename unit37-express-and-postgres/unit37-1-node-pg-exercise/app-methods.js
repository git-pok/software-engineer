const db = require("./db.js");

// *******************************************
// GENERAL PURPOSE METHODS
// *******************************************
function createItemObj(code, name, description) {
    return {
        code,
        name,
        description,
    }
}


function selectAllFromDatabase(table) {
    return db.query(`SELECT * FROM ${table};`);
}



// *******************************************
// COMPANY TABLE METHODS
// *******************************************
function addToCompaniesDatabase(obj) {
    const { code, name, description } = obj;
    db.query(`INSERT INTO companies (code, name, description)
        VALUES ($1, $2, $3);`, [code, name, description]
    );
}



function queryCompanyTableByCode(code) {
    return db.query(`SELECT code, name, description
        FROM companies WHERE code = $1;`, [code]
    );
}


function deleteCompaniesTableRow(code) {
    return db.query(`DELETE FROM companies WHERE code = $1;`,
    [code]
    );
}

function updateCompaniesDatabaseRow(obj, rowName) {
    const { code, name, description } = obj;

    if (code && !name && !description) {
        return db.query(`UPDATE companies SET code = $1
            WHERE code = $2 RETURNING code, name, description;`,
            [code, rowName]
        );
    } if (code && name && !description) {
        return db.query(`UPDATE companies SET code = $1,
            name = $2 WHERE code = $3 RETURNING code, name, description;`,
            [code, name, rowName]
        );
    } if (code && name && description) {
        return db.query(`UPDATE companies SET code = $1,
            name = $2, description = $3
            WHERE code = $4 RETURNING code, name, description;`,
            [code, name, description, rowName]
        );
    } if (name && !code && !description) {
        return db.query(`UPDATE companies SET name = $1
            WHERE code = $2 RETURNING code, name, description;`,
            [name, rowName]
        );
    } if (name && description && !code) {
        return db.query(`UPDATE companies SET name = $1,
            description = $2 WHERE code = $3 RETURNING code, name, description;`,
            [name, description, rowName]
        );
    } if (description && !code && !name) {
        return db.query(`UPDATE companies SET description = $1
            WHERE code = $2 RETURNING code, name, description;`,
            [description, rowName]
        );
    } if (description && code && !name) {
        return db.query(`UPDATE companies SET code = $1,
            description = $2 WHERE code = $3 RETURNING code, name, description;`,
            [code, description, rowName]
        );
    }
}


// *******************************************
// INVOICE TABLE METHODS
// *******************************************
function queryInvoiceTableById(id) {
    return db.query(`SELECT *
        FROM invoices WHERE id = $1;`, [id]
    );
}


function queryInvoiceTableByCode(comp_code) {
    return db.query(`SELECT * FROM invoices
        WHERE comp_code = $1;`, [comp_code]
    );
}


function addToInvoicesDatabase(obj) {
    const { comp_code, amt, paid, add_date, paid_date } = obj;
    console.log(comp_code, amt, paid, add_date, paid_date);
    if (!paid_date && !add_date) {
        db.query(`INSERT INTO invoices (comp_code, amt, paid)
            VALUES ($1, $2, $3);`, [comp_code, amt, paid]
        );
    } else if (!add_date) {
        db.query(`INSERT INTO invoices (comp_code, amt, paid, paid_date)
            VALUES ($1, $2, $3, $4);`, [comp_code, amt, paid, paid_date]
        );
    } else if (!paid_date) {
        db.query(`INSERT INTO invoices (comp_code, amt, paid, add_date)
            VALUES ($1, $2, $3, $4);`, [comp_code, amt, paid, add_date]
        );
    } else {
        db.query(`INSERT INTO invoices (comp_code, amt, paid, paid_date, add_date)
            VALUES ($1, $2, $3, $4, $5);`, [comp_code, amt, paid, paid_date, add_date]
        );
    }
}

function updateInvoicesDatabaseRow(obj, rowId) {
    const { comp_code, amt, paid, add_date, paid_date } = obj;
    // Note, when we submit json to update an invoice, 
    // if we change paid to false, the paid date
    // automatically gets set to null.
    if (!paid_date && paid && amt && add_date) {
        return db.query(`UPDATE invoices SET amt = $1, paid = $2,
            add_date = $3 WHERE id = $4 RETURNING id, comp_code, amt,
            paid, add_date, paid_date;`,
            [amt, paid, add_date, rowId]
        );
    } else {
        return db.query(`UPDATE invoices SET amt = $1, paid = $2,
            add_date = $3, paid_date = $4
            WHERE id = $5 RETURNING id, comp_code, amt, paid, add_date, paid_date;`,
            [amt, paid, add_date, paid_date, rowId]
        );
    }
}


function deleteInvoicesTableRow(id) {
    db.query(`DELETE FROM invoices WHERE id = $1;`, [id]);
}


module.exports = {
    createItemObj,
    addToCompaniesDatabase,
    updateCompaniesDatabaseRow,
    queryCompanyTableByCode,
    deleteCompaniesTableRow,
    selectAllFromDatabase,
    queryInvoiceTableById,
    addToInvoicesDatabase,
    updateInvoicesDatabaseRow,
    deleteInvoicesTableRow,
    queryInvoiceTableByCode,
};