const mongoose = require("mongoose");

const FreelancerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  Number_of_hires: {
    type: Number
  },
  Hours_of_replay: {
    type: Number
  },
  Desc: {
    type: String
  },
  services:[{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "services" 
  }],
  Business_hours: [{
    Day :String ,
    Hours: String
  }],
  perimetre:{
    type : number
  }

});

module.exports = mongoose.model("freelancer", FreelancerSchema);
