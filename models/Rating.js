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
  review: {
    type: String
  },
  satisfaction: {
    type: Number
  },
  Date:
  {
    type: Date,
    default:Date.now
  }
});

module.exports = mongoose.model("rating", RatingSchema);
