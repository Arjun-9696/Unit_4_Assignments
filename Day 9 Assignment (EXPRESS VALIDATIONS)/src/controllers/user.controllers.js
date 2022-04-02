const express = require('express');
const User = require('../models/user.models');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send({ user: user });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.post(
  '/',
  body('first_name')
    .isLength({ min: 3 }, { max: 15 })
    .withMessage('firstName is required'),
  body('last_name')
    .isLength({ min: 3 }, { max: 15 })
    .withMessage('lastName is required'),
  body('email').isEmail().withMessage('email is required and valid'),
  //   body('age')
  //     .isInt({ min: 1 }, { max: 3 })
  //     .withMessage('age is required and it should be between 1 to 150'),
  body('pincode')
    .isNumeric({ min: 6 })
    // .isPostalCode()
    .withMessage('pincode is required'),
  body('email').isEmail().withMessage('email is required and valid'),
  body('age')
    .isInt({ min: 1 }, { max: 100 })
    .withMessage('age is required and it should be between 1 to 150'),
  body('gender')
    .contains({ male: 'male' }, { female: 'female' })
    .withMessage(
      'gender is required and it should be either Male, Female or Others '
    ),
  async (req, res) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
      return res.status(400).json({ data: error.array() });
    }
    const user = await User.create(req.body);
    return res.status(200).send({ data: user });
  }
);

module.exports = router;


// post =>     const user = await User.create(req.body);
// get => const user = await User.find();
// get =>  const user = await User.deleteById(req.body);
// get =>  const user = await User.create(req.body);