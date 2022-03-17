const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema(
  {
    marks: { type: Number, required: true },
    evalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'evaluation',
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Submission = mongoose.model('submission', submissionSchema);

module.exports = Submission;
