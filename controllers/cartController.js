const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
const Cart = require('../models/Cart');

exports.getCart = async function(req, res) {
    cart =  Cart.findOne({'_id': req.params.cart_id}).populate('items.recipe');

   
        if (cart) {
           return res.send(cart) 
        }
        else{
            return res.send(null)
        }
}


exports.addRecipeToCart = async function (req, res, err) {
    const user = req.user
    const item = {
        recipe: req.params.recipe_id,
        quantity: req.body.quantity
    }

    console.log(item.quantity);
    const foundCart = await Cart.findOne({ 'user': req.user.id })
    if (!foundCart) {
        const newCart = await new Cart({
            user: user.id,
            items: [item]
        }).save()
        res.status(201).send({
            newCart: newCart,
            message: "Added To Cart"
        })
    }
    else {
        let recipes = foundCart.items.map((item) => item.recipe);
        
        if (recipes.includes(item.recipe)) {
        
            Cart.findOneAndUpdate({ user: user.id, "items.recipe": req.params.recipe_id }, { "items.$.quantity": req.body.quantity }
                , { new: true })
                .then((existingCart) => {
                    res.status(200).send({
                        existingCart: existingCart,
                        message: 'It worked'
                    })
                })
                .catch((error) => {
                    res.send({ error })
                })
        }
        else {
            Cart.findOneAndUpdate({ user: user.id }, { $push: { items: item } }, { new: true })
                .then((mami) => {
                    res.status(200).send({
                        mami: mami,
                        message: 'New Item Added to Cart'
                    })
                })
                .catch((error) => {
                    res.send({ error })
                })
        }

    }


}

exports.deleteFromCart = async function (req, res, err) {
    const user = req.user;
    const cart = req.params.cart_id;
    
}




