const mongoose = require('mongoose');
const Recipe = require('./Recipe');
const User = require('./User')
const Schema = mongoose.Schema;

const carts = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },

    items: [{
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Recipe
    },
    quantity: {
        type: Number,
        required: true
    }

    }]
})

module.exports =  mongoose.model("Cart", carts);