const mongoose = require("mongoose");

const FreelancerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model("freelancer", FreelancerSchema);
