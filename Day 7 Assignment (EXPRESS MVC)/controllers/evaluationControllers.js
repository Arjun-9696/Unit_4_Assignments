const express = require('express');

const Evaluation = require('../models/evaluationModel');

const crudController = require('./crudControllers');

const router = express.Router();

router.post('/', crudController(Evaluation).post);
router.get('/', crudController(Evaluation).get);
router.get('/:id', crudController(Evaluation).getOne);

module.exports = router;
