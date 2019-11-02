const mongoose = require("mongoose");

const FactureSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients"
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
