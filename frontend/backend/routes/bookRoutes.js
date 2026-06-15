const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

// ADD BOOK
router.post("/add", async (req, res) => {
  try {

    const newBook = new Book(req.body);

    await newBook.save();

    res.status(201).json({
      message: "Book Added Successfully",
      book: newBook,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// GET ALL BOOKS
router.get("/", async (req, res) => {
  try {

    const books = await Book.find();

    res.status(200).json(books);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// UPDATE BOOK
router.put("/update/:id", async (req, res) => {
  try {

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Book Updated Successfully",
      book: updatedBook,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// DELETE BOOK
router.delete("/delete/:id", async (req, res) => {
  try {

    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Book Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// ISSUE BOOK
router.put("/issue/:id", async (req, res) => {
  try {

    const { issuedTo } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        issued: true,
        issuedTo,
        issueDate: new Date().toLocaleDateString(),
      },
      { new: true }
    );

    res.status(200).json(updatedBook);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// RETURN BOOK
router.put("/return/:id", async (req, res) => {
  try {

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        issued: false,
        issuedTo: "",
        issueDate: "",
      },
      { new: true }
    );

    res.status(200).json(updatedBook);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

module.exports = router;