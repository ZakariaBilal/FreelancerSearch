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
  }
});

module.exports = mongoose.model("report", ReportSchema);
