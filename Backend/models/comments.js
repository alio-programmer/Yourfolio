const mongoose = require("mogoose");

const commentSchema = new mongoose.Schema({
  Comment: {
    String: true,
  },
  Likes: {
    Number: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { commentSchema };
