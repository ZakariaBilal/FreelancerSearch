const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
services:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "services"
}],
Name:{
        type: String, 
        required : true,
        unique :true 
},

});

module.exports = mongoose.model("service", ServiceSchema);
