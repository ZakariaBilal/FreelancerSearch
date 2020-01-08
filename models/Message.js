const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  message: {
    type: String
  }
});

module.exports = mongoose.model("message", MessageSchema);
