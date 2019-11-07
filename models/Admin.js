const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model("admin", AdminSchema);
