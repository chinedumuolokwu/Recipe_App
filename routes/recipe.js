const express = require('express');
const recipeController = require('../controllers/recipeController');

const router = express.Router();
router.get('/', recipeController.getrecipes);

router.get('/:recipe_id', recipeController.getrecipe);

router.post('/', recipeController.createrecipe);

router.put('/:recipe_id', recipeController.updaterecipes);

router.delete('/:recipe_id', recipeController.deleterecipe);

module.exports = router;