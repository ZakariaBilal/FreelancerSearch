const mongoose = require("mongoose");

const DemandeSchema = mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "services"
  },
  localisation: {
    type: String
  },
  description: {
    type: String
  },
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "freelancers"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  price: {
    type: Number
  },
  date_effectue: {
    type: Date,
    default:Date.now
  },
  date_execution: {
    type: Date
  },
  statuts: {
    type: String,
    default:'Waiting for validation'
  }
});

module.exports = mongoose.model("demande", DemandeSchema);
