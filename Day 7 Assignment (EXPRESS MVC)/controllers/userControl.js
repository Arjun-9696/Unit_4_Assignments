const express = require('express');
const User = require('../models/userModel');
const crudController = require('../controllers/crudControllers');

const router = express.Router();

router.get('/', crudController(User).get);
router.post('/', crudController(User).post);
router.get("/:id",crudController(User).getOne);

module.exports = router;
