const express = require('express');
const connect = require('./configs/db');
const userController = require('./controllers/user.controller');
const app = express();
app.use(express.json());
app.use('/users', userController);
const start = async () => {
  await connect();
  app.listen(5001, () => {
    console.log('listning at port 5001');
  });
};
module.exports = start;
