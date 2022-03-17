const express = require('express');
const Batch= require('../models/batchModel');
const crudController = require('./crudControllers');

const router = express.Router();

router.get('/', crudController(Batch).get);
router.get('/batch', crudController(Batch).getOne)
router.post('/', crudController(Batch).post);

module.exports =router;