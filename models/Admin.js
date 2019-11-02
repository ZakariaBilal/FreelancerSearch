const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model("admin", AdminSchema);
