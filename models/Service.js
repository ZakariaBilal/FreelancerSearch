const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
  freelancer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "freelancers"
    }
  ],
  Name: {
    type: String,
    required: true,
    unique: true
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories"
  }
});

module.exports = mongoose.model("service", ServiceSchema);
