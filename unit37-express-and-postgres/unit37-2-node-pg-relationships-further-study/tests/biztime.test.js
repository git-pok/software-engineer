process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app.js');
const db = require("../db.js");


let company;
let invoices;
let companyWithNoInvoices;


beforeEach(async ()=> {
    const companyResult = await db.query(`INSERT INTO companies (code, name, description)
        VALUES ($1, $2, $3) RETURNING code, name, description`,
        ['ape', 'APEVIL', 'OS']
    );

    const companyRows = companyResult.rows; 
    const [ ape ]  = companyRows;
    company = ape;

    const date = JSON.stringify('2023-03-22T04:00:00.000Z');
    const invoiceResult = await db.query(`INSERT INTO invoices (comp_code, amt, paid, add_date)
        VALUES ($1, $2, $3, $4) RETURNING id, comp_code, amt, paid, add_date, paid_date`,
        ['ape', 400, false, date]
    );

    const invoiceRows = invoiceResult.rows; 
    const [ invoice ]  = invoiceRows;
    invoices = invoice;

    const company2Result = await db.query(`INSERT INTO companies (code, name, description)
        VALUES ($1, $2, $3) RETURNING code, name, description`,
        ['hzl', 'Hazel', 'OS']
    );

    const company2Rows = company2Result.rows; 
    const [ hzl ]  = company2Rows;
    companyWithNoInvoices = hzl;
});


afterEach(async ()=> {
    await db.query(`DELETE FROM companies`);
});


afterAll(async ()=> {
    await db.end();
});


describe('/GET /companies', () => {
    test('Get all companies', async () => {
        const res = await request(app).get('/companies');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ companies: [ company, companyWithNoInvoices ] });
    });
});


describe('/GET /companies/:code', () => {
    test('Get a company', async () => {
        const { code, name, description } = company;
        const { id, comp_code, amt, paid, add_date, paid_date } = invoices;
        const res = await request(app).get(`/companies/${code}`);

        company.invoices = [ invoices ];
        company.industries = [];
        // The tests fail with date and the received date
        // has quotes around it, and the expected date doesn't.
        // This is why I cahnge the value to a string.
        invoices.add_date = "2023-03-22T04:00:00.000Z";       
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ company });
    });

    test('Responds with a 404 if company not found', async () => {
        const res = await request(app).get(`/companies/33`);
        expect(res.statusCode).toBe(404);
    });
});


describe('/POST /companies', () => {
    test('Creating a company', async () => {
        const company = { "code": "b", "name": "BLI","description": "Maker of OSX." }
        const res = await request(app).post('/companies').send( company );
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ company });
    });

    test('Responds with a 400 for invalid post body', async () => {
        // If we dont include code in our post, we get a test
        // fail with a status code of 500
        // that says slugify expected a string.
        const company = { "code": "hd", "description": "Maker of OSX." }
        const res = await request(app).post('/companies').send(company);
        expect(res.statusCode).toBe(400);
    });
});


describe('/PUT /companies/:code', () => {
    test('Edit a company', async () => {
        const { code, name, description } = companyWithNoInvoices;
        const companyEdit = { "code": "v", "name": "Villo","description": "Maker of OSX." }
        const res = await request(app).put(`/companies/${code}`).send( companyEdit );     
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ company: companyEdit });
    });
});


describe('/DELETE /companies/:code', () => {
    test('Deleting a company', async () => {
        const { code, name, description } = companyWithNoInvoices;
        const res = await request(app).delete(`/companies/${code}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: `Deleted!` });
    });

    test('Responds with a 404 for deleting an invalid company', async () => {
        const res = await request(app).delete('/companies/ice');
        expect(res.statusCode).toBe(404);
    });
});


describe('/GET /invoices', () => {
    test('Get all invoices', async () => {
        const res = await request(app).get('/invoices');
        invoices.add_date = "2023-03-22T04:00:00.000Z";
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ "invoices": [ invoices ] });
    });
});


describe('/GET /invoices/:id', () => {
    test('Get an invoice', async () => {
        const { code, name, description } = company;
        const { id, comp_code, amt, paid, add_date, paid_date } = invoices;
        const res = await request(app).get(`/invoices/${id}`);

        invoices.company = company;
        // The tests fail with date and the received date
        // has quotes around it, and the expected date doesn't.
        // This is why I cahnge the value to a string.
        invoices.add_date = "2023-03-22T04:00:00.000Z";       
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ invoice: invoices });
    });

    test('Responds with a 404 if invoice not found', async () => {
        const res = await request(app).get(`/invoices/33`);
        expect(res.statusCode).toBe(404);
    });
});


describe('/POST /invoices', () => {
    test('Creating an invoice', async () => {
        const invoice = { "comp_code": 'ape', "amt": 1000, "paid": false, "add_date": "2023-03-22T04:00:00.000Z" }
        const res = await request(app).post('/invoices').send( invoice );
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ invoice });
    });
});


describe('/PUT /invoices/:id', () => {
    test('Edit paid invoice', async () => {
        const { id, comp_code, amt, paid, add_date, paid_date } = invoices;
        const invoiceEdit = { "paid": true, "amt": 10, "add_date": "2023-03-22T04:00:00.000Z"};
        const res = await request(app).put(`/invoices/${id}`).send( invoiceEdit );
        const invoice = {
            "id": id, "comp_code": comp_code, "paid": true, "amt": 10,
            "add_date": "2023-03-22T04:00:00.000Z", "paid_date": "2023-03-23T04:00:00.000Z",
        };    
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ invoice });
    });

    test('Edit unpaid invoice', async () => {
        const { id, comp_code, amt, paid, add_date, paid_date } = invoices;
        const invoiceEdit = { "paid": false, "amt": 10, "add_date": "2023-03-22T04:00:00.000Z"};
        const res = await request(app).put(`/invoices/${id}`).send( invoiceEdit );
        const invoice = {
            "id": id, "comp_code": comp_code, "paid": false, "amt": 10,
            "add_date": "2023-03-22T04:00:00.000Z", "paid_date": null,
        };    
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ invoice });
    });
});


describe('/DELETE /invoices/:code', () => {
    test('Deleting invoice', async () => {
        const { id, comp_code, amt, paid, add_date, paid_date } = invoices;
        const res = await request(app).delete(`/invoices/${id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: `Deleted!` });
    });

    test('Responds with a 404 for deleting an invalid invoice', async () => {
        const res = await request(app).delete('/invoices/13');
        expect(res.statusCode).toBe(404);
    });
});

