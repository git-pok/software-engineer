// const { mean, split, turnStrToNumsArr, isLetter, median, mode } = require('./calculator-app-methods.js');
process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../shoplist-app.js');
let shoplists = require('../fakeDb.js');



let orange = { 
    name: 'Orange',
    price: 0.99,
};



beforeEach(()=> {
    shoplists.push(orange);
});



afterEach(()=> {
    shoplists.length = 0;
});



describe('/GET /items', () => {
    test('Get all items', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ items: [ orange ] });
    });
});



describe('/POST /items', () => {
    test('Creating an item', async () => {
        const res = await request(app).post('/items').send( { name: "Mango", price: 0.99 } );
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ added: { name: "Mango", price: 0.99 } });
    });

    test('Responds with a 400 if name is missing', async () => {
        const res = await request(app).post('/items').send( { "name": "", price: 0.99 } );
        expect(res.statusCode).toBe(400);
    });

    test('Responds with a 400 if name exists', async () => {
        const res = await request(app).post('/items').send( { "name": "Orange", price: 0.99 } );
        expect(res.statusCode).toBe(400);
    });
});



describe('/GET /items/:name', () => {
    test('Get item by name', async () => {
        const res = await request(app).get(`/items/${orange.name}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ item: orange });
    });

    test('Responds with a 404 for invalid name', async () => {
        const res = await request(app).get('/items/ice');
        expect(res.statusCode).toBe(404);
    });
});



describe('/PATCH /items/:name', () => {
    test('Updating an item"s name', async () => {
        const res = await request(app).patch(`/items/${orange.name}`).send( { "name": "Mango" } );
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ "updated": { name: "Mango", price: 0.99 } });
    });

    test('Responds with a 404 for invalid name', async () => {
        const res = await request(app).patch('/items/ice').send( { "name": "Mango" } );
        expect(res.statusCode).toBe(404);
    });
});



describe('/DELETE /items/:name', () => {
    test('Deleting an item', async () => {
        const res = await request(app).delete(`/items/${orange.name}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: `Deleted ${orange.name}!` });
    });

    test('Responds with a 404 for deleting an invalid name', async () => {
        const res = await request(app).delete('/items/ice');
        expect(res.statusCode).toBe(404);
    });
});
