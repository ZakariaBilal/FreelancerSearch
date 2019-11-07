const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
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
  Date :
  {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("report", ReportSchema);
