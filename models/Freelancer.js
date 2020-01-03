const mongoose = require("mongoose");

const FreelancerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  numberOfHires: {
    type: Number,
    default: 0
  },
  hoursOfReplay: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "services"
    }
  ],

  perimetre: {
    type: Number
  },
  numberOfProfileChecks: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("freelancer", FreelancerSchema);
