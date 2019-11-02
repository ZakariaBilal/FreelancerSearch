const mongoose = require("mongoose");

const RatingSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients"
  },
  freelancer: {
    type: mongoose.Schemma.Types.ObjectId,
    ref: "freelancers"
  },
  comment: {
    type: String
  },
  stars: {
    type: Number
  }
});

module.exports = mongoose.model("rating", RatingSchema);
