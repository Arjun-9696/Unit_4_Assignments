const express = require('express');
const connect = require('./configs/db');
const userController = require('./controllers/user.controllers');

const app = express();
app.use(express.json());

app.use('/users', userController);

const start = async () => {
  await connect();
  app.listen(5002, () => {
    console.log('listening at port 5002');
  });
};
module.exports = start;
