// CREATED ALL LOGIC IN THIS FILE
process.env.NODE_ENV = 'test';

const request = require("supertest");
const app = require("../app.js");
const db = require("../db.js");

let book;
let wrongBook;


beforeEach(async ()=> {    
    const insertBook = await db.query(`
        INSERT INTO books (isbn, amazon_url, author, language,
        pages, publisher, title, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING isbn, amazon_url, author, language, pages, publisher, title, year`,
        ['0691161518', 'http://a.co/eobPtX2', 'Matthew Lane', 'english',
        264, 'Princeton University Press', 'Power-Up: Unlocking the Hidden Mathematics in Video Games', 2017]
    );

    const data = insertBook.rows;
    book = data;

    wrongBook = {
        "isbn": "0691161518",
        "amazon_url": "http://a.co/eobPtX2",
        "author": "Matthew Lane",
        "language": "english",
        "pages": "264",
        "publisher": "Princeton University Press",
        "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
        "year": "2017"
      }
});


afterEach(async ()=> {
    await db.query(`DELETE FROM books`);
});


afterAll(async ()=> {
    await db.end();
});


describe('/GET /books', ()=> {
    test('Get books', async ()=> {
        const res = await request(app).get('/books');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            books: book
        });
    });
});


describe('/GET /books/:isbn', ()=> {
    test('Get book', async ()=> {
        const [ bookData ] = book;
        const isbn = bookData.isbn;
        const res = await request(app).get(`/books/${isbn}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            book: bookData
        });
    });

    test('Repsonds with a 404 if book not found', async ()=> {
        const res = await request(app).get("/books/ice");
        expect(res.statusCode).toBe(404);
    });
});


describe('/POST /books', ()=> {
    test('Create book', async ()=> {
        const newBook = {
            "isbn": "0691161900",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Vincent I",
            "language": "english",
            "pages": 264,
            "publisher": "Harvard University Press",
            "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
            "year": 2017
        };
        const res = await request(app).post("/books").send(newBook);
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            book: newBook
        });
    });

    test('Responds with a 400 for invalid json schema', async ()=> {
        const res = await request(app).post("/books").send(wrongBook);        
        expect(res.statusCode).toBe(400);
    });
});


describe('/PUT /books/:isbn', ()=> {
    test('Update entire book', async ()=> {
        const [ bookData ] = book;
        const isbn = bookData.isbn;
        const bookUpdate = {
            "isbn": "0691161518",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matthew L",
            "language": "english",
            "pages": 264,
            "publisher": "Princeton Press",
            "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
            "year": 2017
        }
        const res = await request(app).put(`/books/${isbn}`).send(bookUpdate);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            book: bookUpdate
        });
    });

    test('Responds with a 400 for invalid json schema', async ()=> {
        const [ bookData ] = book;
        const isbn = bookData.isbn;
        const res = await request(app).put(`/books/${isbn}`).send(wrongBook);        
        expect(res.statusCode).toBe(400);
    });
});


describe('/DELETE /books/:isbn', ()=> {
    test('Delete book', async ()=> {
        const [ bookData ] = book;
        const isbn = bookData.isbn;
        const res = await request(app).delete(`/books/${isbn}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            message: "Book deleted"
        });
    });

    test('Responds with a 400 for invalid book', async ()=> {
        const res = await request(app).delete("/books/ice");        
        expect(res.statusCode).toBe(404);
    });
});