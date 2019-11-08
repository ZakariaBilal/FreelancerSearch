const mongoose = require("mongoose");

<<<<<<< HEAD
const AdminSchema = mongoose.Schema({});
=======
const AdminSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});
>>>>>>> c0c0abe6cbe0a7c359f7cb487d0d8343704a1b2e

module.exports = mongoose.model("admin", AdminSchema);
