const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({});

module.exports = mongoose.model("admin", AdminSchema);
