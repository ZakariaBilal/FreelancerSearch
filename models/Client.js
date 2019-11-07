const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  infos_banque:{}
});

module.exports = mongoose.model("client", ClientSchema);
