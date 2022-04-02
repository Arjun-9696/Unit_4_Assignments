const express = require('express');

const connect = require('./src/configs/db');

const userController = require('./src/controllers/user.controller');

const app = express();

app.use(express.json());

app.use('/users', userController);

app.listen(5003, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log('listening on port 5003');
});
