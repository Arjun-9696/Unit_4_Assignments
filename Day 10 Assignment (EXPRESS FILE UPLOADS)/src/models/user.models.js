const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    profile_pic: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema); // user => users

// const postSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   body: { type: String, required: true },
//   user_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user',
//     required: true,
//   },
// });

// const Post = mongoose.model('post', postSchema); // user => users

module.exports = User;
