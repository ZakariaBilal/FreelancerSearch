const mongoose = require("mongoose");

const LikeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "articles"
  },

  date: {
    type: Date,
    defaut: Date.now
  }
});

module.exports = mongoose.model("like", LikeSchema);
