const express = require('express');
const Student= require('../models/studentModel');
const crudController=require('./crudControllers');

const router=express.Router();

router.get('/', crudController(Student).get);
router.post('/', crudController(Student).post);
router.get('/:id', crudController(Student).getOne);

module.exports = router;