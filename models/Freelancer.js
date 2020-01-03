const mongoose = require("mongoose");

const FreelancerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  numberOfHires: {
    type: Number,default:0
  },
  hoursOfReply: {
    type: Number,default:0
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
    type: number
  }
});

module.exports = mongoose.model("freelancer", FreelancerSchema);
