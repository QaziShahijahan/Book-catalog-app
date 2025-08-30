const express = require("express");
const { getBooks, getBook, createBook, updateBook, deleteBook } = require("../Controllers/bookController");
const { protect } = require("../MiddleWare/authMiddleWare");

const router = express.Router();


router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", protect, createBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router;
