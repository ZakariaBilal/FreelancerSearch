const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "freelancers"
  },
  content: {
    type: String
  },
  title: {
    type: String
  },
  date: {
    type: Date,
    defaut: Date.now
  },
  numberOfLikes: {
    type: Number,
    default: 0
  },
  numberOfComments: {
    type: Number,
    default: 0
  },
  numberOfVisits: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("article", ArticleSchema);
