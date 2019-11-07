const mongoose = require("mongoose");

const DemandeSchema = mongoose.Schema({
    service: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "services" 
    },
    localisation :{
        type:String
    },
    description:{
        type:String
    },
    freelancer :{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "freelancers" 
    },
    user :{
         type: mongoose.Schema.Types.ObjectId,
        ref: "users" 
    },
    price :{
         type: Number
        },
    date_effectue:{
         type: Date
        },
    date_execution:{
         type: Date
        },
    statut :{
        type:String
    }

});

module.exports = mongoose.model("demande", DemandeSchema);
