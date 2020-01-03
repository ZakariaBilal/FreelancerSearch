const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "articles"
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    defaut: Date.now
  }
});

module.exports = mongoose.model("comment", CommentSchema);
