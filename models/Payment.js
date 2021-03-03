const mongoose = require('mongoose');
const Orders = require('./Orders');
const User = require('./User');

const paymentSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true
        },

        order_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Orders,
            required: true
        },

        complete: {
            type: Boolean,
            default:false
        }
    }
)

module.exports = mongoose.model('Payment', paymentSchema)