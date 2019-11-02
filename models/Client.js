const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model("client", ClientSchema);
