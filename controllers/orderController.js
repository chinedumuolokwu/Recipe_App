const recipe = require('../models/Orders');
const mongoose = require('mongoose');
const Orders = require('../models/Orders');

exports.getorders = async function (req, res, err) {
    const orders = await Orders.find({});

    if (!orders) {
        res.status(400).send({
            success: false,
            message: 'No order made yet'
        })
    }
    else {
        res.status(200).send({
            success: true,
            orders: orders
        })
    }
}

exports.getorder = async function (req, res, err) {
    const order = await Orders.findOne({ '_id': req.params.order_id })

    if (!order) {
        res.status(400).send({
            success: false,
            message: 'No order registered with this ID'
        })
    }
    else {
        res.status(200).send({
            success: true,
            order: order
        })
    }
}

exports.createorder = async function (req, res, error) {

    try {
        const order = await new Orders({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        }).save()


        res.status(200).send({
            success: true,
            recipe: recipe,
            message: "Recipe successfully created"
        })
    } catch (error) {
        res.send({ error })
    }
}
