const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/', (req, res, next) => {
    Book.find()
      .then(books => res.status(200).json(books))
      .catch(error => res.status(400).json({ error }));
});
  
router.get('/:id', (req, res, next) => {
    Book.findOne({ _id: req.params.id })
    .then(book => {
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json(book);
    })
    .catch(error => res.status(400).json({ error }));
});

router.get('/bestrating', (req, res, next) => {
});

router.post('/:id',(req, res, next) => {
});

router.put('/',(req, res, next) => {
});

router.delete('/:id',(req, res, next) => {
});

router.post('/:id/rating',(req, res, next) => {
});

module.exports = router;