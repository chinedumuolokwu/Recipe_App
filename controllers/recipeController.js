const recipe = require('../models/Recipe');
const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
const Cart = require('../models/Cart')

exports.getrecipe = async function (req, res, err) {
    const recipe = await Recipe.findOne({ "_id": req.params.recipe_id })

    if (!recipe) {
        res.status(400).send({
            success: false,
            message: 'No Recipe with the given id'
        })
    }
    else {
        res.status(200).send({
            success: true,
            recipe: recipe,
        })
    }
}

exports.getrecipes = async function (req, res, err) {

    const recipes = await Recipe.find({});
    if (!recipes) {
        res.status(400).send({
            success: false,
            message: 'no recipes added yet'
        });
    }
    else {
        res.status(200).send({
            success: true,
            recipes: recipes,
        })
    }

}

exports.createrecipe = async function (req, res, error) {

    try {
        const recipe = await new Recipe({
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

exports.updaterecipes = async function (req, res, err) {
    let updated_recipe = await Recipe.findByIdAndUpdate(req.params.recipe_id,
        req.body, { new: true })
    try {
        return res.status(200).send({
            success: true,
            recipe: updated_recipe
        })
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: error
        })
    }


}

exports.deleterecipe = async function (req, res, err) {

    const _id = req.params.recipe_id;
    const product = await Recipe.findByIdAndRemove(_id);
    if (!product) {
        res.status(404).send(
            {
                success: false,
                message: "Product not found"
            }
        )
    }

    else {
        res.status(200).send(
            {
                success: true,
                message: "Recipe has been deleted"
            }
        )
    }
}



