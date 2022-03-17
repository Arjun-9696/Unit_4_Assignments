const mongoose = require('mongoose');

const evalSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    batchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'batch',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Evaluation = mongoose.model('evaluation', evalSchema);

module.exports = Evaluation;
