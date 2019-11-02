const mongoose = require("mongoose");

const DemandeSchema = mongoose.Schema({});

module.exports = mongoose.model("demande", DemandeSchema);
