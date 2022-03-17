const express = require('express');
const connect = require('./configs/db');
const userController = require('./controllers/userControl');
const studentController = require('./controllers/studentControll');
const batchController = require('./controllers/batchControllers');
const evaluationController = require('./controllers/evaluationControllers');
const submissionController = require('./controllers/submissionControllers');

const app = express();
app.use(express.json());

app.use('/users', userController);
app.use('/student', studentController);
app.use('/batch', batchController);
app.use('/evaluation', evaluationController);
app.use('/submission', submissionController);


app.listen(5000, () => {
  connect();
  console.log('listening on port 5000');
});
