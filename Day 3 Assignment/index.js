//Imported express
const express = require("express");
//Calling express function
const app = express();
// allBooks middleware
app.get('/books', allBooks, (req, res) => {
  res.send({ Books: 'All books' });
});
// :name is a variable, we are using this variable for fetching book names as API
app.get("/book/:name", (req, res) => {
  req.name = req.params.name;
  return res.send({bookName: req.name});
});

// middleware function 
function allBooks(req, res, next) {
  console.log('Fetching all books');
  next();
}

app.listen(5005, () => {
  console.log("listening on port 5005");
});
