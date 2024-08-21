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


exports.getBestRatingBooks = (req, res, next) => {
  // Logique pour récupérer les 3 livres ayant la meilleure note moyenne

};

// Logique pour ajouter un nouveau livre avec une image
exports.addBook = (req, res, next) => {
  const bookObject = JSON.parse(req.body.book);
  delete bookObject._id;
  delete bookObject._userId;

  const book = new Book ({
    ...bookObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    ratings: [],
    averageRating: 0,
  })

  book.save()
  .then(() => res.status(201).json({ message: 'Livre enregistré !' }))
  .catch(error => res.status(400).json({ error }));
};

exports.updateBook = (req, res, next) => {
  // Logique pour mettre à jour un livre par son ID avec ou sans image
};

exports.deleteBook = (req, res, next) => {
  // Logique pour supprimer un livre par son ID
};

exports.addRating = (req, res, next) => {
  // Logique pour ajouter une note à un livre pour un utilisateur donné
};