const mongoose = require('mongoose');
const User = require('./User');
const Cart = require('./Cart');
const Schema = mongoose.Schema;

var orders = new Schema({

   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User   
    },

//    items: [
//       {count: {
//          type: Number,
//          required: true
//       },
//          recipe: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Recipe',
//             required: true
//       }
//    } 
// ],

   cart_id: {type: mongoose.Schema.Types.ObjectId, ref: Cart
             },
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