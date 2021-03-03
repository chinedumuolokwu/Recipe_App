const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var recipe = new Schema({

    image:{type: String, default: ''},
    name:  {type: String, required: true},
    description:  {type:String},
    price: {type: Number, required: true},
    
});


module.exports =  mongoose.model("Recipe", recipe);