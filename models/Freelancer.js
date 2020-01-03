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
  desc: {
    type: String
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "services"
    }
  ],
  businessHours: [
    {
      Day: String,
      Hours: String
    }
  ],
  perimetre: {
    type: Number
  }
});

module.exports = mongoose.model("freelancer", FreelancerSchema);
