const express = require("express");
const Book = require("../models/book");
const jsonschema = require('jsonschema');
const bookSchema = require('../schemas/book-schema.json');
const ExpressError = require('../expressError.js');

const router = new express.Router();

/** GET / => {books: [book, ...]}  */

router.get("/", async function (req, res, next) {
  try {
    const books = await Book.findAll(req.query);
    return res.json({ books });
  } catch (err) {
    return next(err);
  }
});

/** GET /[id]  => {book: book} */

router.get("/:id", async function (req, res, next) {
  try {
    const book = await Book.findOne(req.params.id);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
});

/** POST /   bookData => {book: newBook}  */

router.post("/", async function (req, res, next) {
  try {
    // ADDED CODE: 36-44.
    const rqstData = req.body;
    const schemaCompare = jsonschema.validate(rqstData, bookSchema);
    const isValid = schemaCompare.valid;
    if (!isValid) {
      const schemaErrors = schemaCompare.errors; 
      const listOfErrors = schemaErrors.map((err)=> err.stack);
      const err = new ExpressError(listOfErrors, 400);
      return next(err);
    } 
    const book = await Book.create(req.body);
    return res.status(201).json({ book });
  } catch (err) {
    return next(err);
  }
});

/** PUT /[isbn]   bookData => {book: updatedBook}  */

router.put("/:isbn", async function (req, res, next) {
  try {
    // ADDED CODE: 57-66.
    const rqstData = req.body;
    const isbnParam = req.params.isbn; 
    const schemaCompare = jsonschema.validate(rqstData, bookSchema);
    const isValid = schemaCompare.valid;
    if (!isValid) {
      const schemaErrors = schemaCompare.errors; 
      const listOfErrors = schemaErrors.map((err)=> err.stack);
      const err = new ExpressError(listOfErrors, 400);
      return next(err);
    }
    const book = await Book.update(isbnParam, rqstData);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[isbn]   => {message: "Book deleted"} */

router.delete("/:isbn", async function (req, res, next) {
  try {
    await Book.remove(req.params.isbn);
    return res.json({ message: "Book deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
