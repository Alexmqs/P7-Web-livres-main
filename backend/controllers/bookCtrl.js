const Book = require('../models/Book');

// Contrôleur pour récupérer tous les livres
exports.getAllBooks = (req, res, next) => {
    Book.find()
      .then(books => res.status(200).json(books))
      .catch(error => res.status(400).json({ error }));
}

// Contrôleur pour récupérer un livre par son ID
exports.getBookById = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
      .then(book => {
        if (!book) {
          return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
      })
      .catch(error => res.status(400).json({ error }));
  };