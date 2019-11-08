const mongoose = require("mongoose");

const FactureSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  freelancer: {
    type: mongoose.Schemma.Types.ObjectId,
    ref: "freelancers"
  },
  Amount: {
    type: Number
  }
});

module.exports = mongoose.model("facture", FactureSchema);
