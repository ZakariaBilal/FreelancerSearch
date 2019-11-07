const mongoose = require("mongoose");

//User has name,username,password,email,tel

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  tel: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  adresse: {
    type:String,
    required: true
  }
});

module.exports = mongoose.model("user", UserSchema);
