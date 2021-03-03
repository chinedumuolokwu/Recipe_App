const mongoose = require('mongoose');
const Recipe = require('./Recipe');
const Schema = mongoose.Schema;

const cartschema = new Schema({
    // carts: [{
    recipe_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Recipe
    },
    quantity: {
        type: Number,
        required: true
    }

    // }]
})