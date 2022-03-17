const express = require('express');

const Submission = require('../models/submissionModel');

const crudController = require('./crudControllers');

const router = express.Router();

router.post('/', crudController(Submission).post);

router.get('/', crudController(Submission).get);

router.get('/highest', async (req, res) => {
  const sub = await Submission.find()
    .populate({
      path: 'evalId',
      populate: {
        path: 'instructorId',
        model: 'user',
      },
    })
    .populate({
      path: 'evalId',
      populate: {
        path: 'batchId',
        model: 'batch',
      },
    })
    .populate('studentId')
    .lean()
    .exec();


  let max = 0;
  let stuId;

  for (var i = 0; i < sub.length; i++) {
    if (sub[i].marks > max) {
      max = sub[i].marks;
      stuId = sub[i].studentId;
      //console.log("stuId:", stuId);
    }
  }
  res.send({ sub });
});

router.get('/:id', crudController(Submission).getOne);
router.get('/eval/:id', async (req, res) => {
  const sub = await Submission.find({ evalId: req.params.id }).lean().exec();
  return res.send(sub);
});

module.exports = router;
