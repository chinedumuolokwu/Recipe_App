const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

var orders = new Schema({

   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User   
    },

   items: [
      {count: {
         type: Number,
         required: true
      },
         recipe: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipe'
      }
   } 
],
   payment: {
      type: Boolean,
      required: true
   },
   status: {
      type: String,
      enum: ['Pending', 'Canceled', 'Processing', 'Shipped', 'Complete'], 
      default: 'Pending' 
   },
   createdAt: {type: Date, default: Date.now}
    
});



module.exports =  mongoose.model("Orders", orders);