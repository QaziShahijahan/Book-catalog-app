const express = require("express");
const { getBooks, getBook, createBook, updateBook, deleteBook } = require("../Controllers/bookController");
const { protect } = require("../MiddleWare/authMiddleWare");

const router = express.Router();


router.get("/books", getBooks);
router.get("/books/:id", getBook);
router.post("/books", protect, createBook);
router.put("/books/:id", protect, updateBook);
router.delete("/books:id", protect, deleteBook);

module.exports = router;
