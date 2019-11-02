const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
  freelancer: {
    type: mongoose.Schemma.Types.ObjectId,
    ref: "freelancers"
  },
  content: {
    type: String
  }
});

module.exports = mongoose.model("article", ArticleSchema);
