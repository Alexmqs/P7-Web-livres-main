const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');

const router = express.Router();


router.get('/', bookCtrl.getAllBooks);

router.get('/:id', bookCtrl.getBookById);

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