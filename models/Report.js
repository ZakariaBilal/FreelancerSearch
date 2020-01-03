const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "freelancers"
  },
  comment: {
    type: String
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("report", ReportSchema);
