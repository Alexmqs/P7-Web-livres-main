const express = require('express');
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://test:r7IdcleNUq2FN0Un@oc-projet7.1oo3a.mongodb.net/?retryWrites=true&w=majority&appName=OC-Projet7',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});




//app.post('/api/auth/signup', (req, res, next) => {
//  res.status(200).json({ message: 'Signup route hit successfully!' });
//});
//
//app.post('/api/auth/login', (req, res, next) => {
//  res.status(200).json({ message: 'Login route hit successfully!' });
//});
//
//app.get('/api/books', (req, res, next) => {
//  res.status(200).json({ message: 'Books route hit successfully!' });
//});
//
//app.get('/api/books/:id', (req, res, next) => {
//  res.status(200).json({ message: `Book with ID ${req.params.id} route hit successfully!` });
//});
//
//app.get('/api/books/bestrating', (req, res, next) => {
//  res.status(200).json({ message: 'Best rating books route hit successfully!' });
//});


// app.post('/api/books/:id',(req, res, next) => {
// });

// app.put('/api/books',(req, res, next) => {
// });


// app.delete('/api/books/:id',(req, res, next) => {
// });

// app.post('/api/books/:id/rating',(req, res, next) => {
// });

module.exports = app;