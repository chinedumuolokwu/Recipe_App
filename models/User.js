const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var user_profile = new Schema({

    first_name:  {type: String, required: true},
    last_name:  {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    address: {type: String, required: true},
    phone_number: {type: Number},
    role: {type: String, enum:["admin", "user"], default: "user"},
    created_at: { type: Date, default: Date.now },
    
});


module.exports =  mongoose.model("User", user_profile);