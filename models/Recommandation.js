const mongoose = require("mongoose");

const RecommandationSchema = mongoose.Schema({
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "freelancers"
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model("recommandation", RecommandationSchema);
