const express = require('express');
const books = require('./books.json');
const app = express();

app.get('', (req, res) => {
  res.send('Hello I am  from server');
});

app.get('/books', (req, res) => {
  res.send(books);
});

app.listen(5000, () => {
  console.log('Listening port 5000');
});
