const Book = require("../Models/Book");


const getBooks = async (req, res) => {
  try {
    const books = await Book.find(); 
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const createBook = async (req, res) => {
  try {
    const { title, author, genre,price,instock } = req.body;
    const book = await Book.create({
      title,
      author,
      genre,
      price,
      instock,
      createdBy: req.user.id,
    });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const updateBook = async (req, res) => {
  try {
    let book = await Book.findOne({ _id: req.params.id, createdBy: req.user.id });
    if (!book) return res.status(404).json({ message: "Book not found" });

    book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };
