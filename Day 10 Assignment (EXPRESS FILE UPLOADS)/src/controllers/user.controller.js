const express = require('express');
const User = require('../models/user.models');
const router = express.Router();

const {
  upload,
  uploadSingle,
  uploadMultiple,
} = require('../middlewares/fileupload');

router.post('/single', uploadSingle('profile_pic'), async (req, res) => {
  try {
    const user = await User.create({
      // id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: req.file.path,
    });

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post('/multiple', uploadMultiple('profile_pic'), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => file.path);
    const user = await User.create({
      // id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: filePaths,
    });

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// /users
router.get('', async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.send({ users });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
