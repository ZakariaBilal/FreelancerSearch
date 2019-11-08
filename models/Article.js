const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
  freelancer: {
    type: mongoose.Schemma.Types.ObjectId,
    ref: "freelancers"
  },
  content: {
    type: String
  },
  title:{
    type:String
  },
  date:{
    type: Date,
    defaut: Date.now
  }
});

module.exports = mongoose.model("article", ArticleSchema);
