const express = require('express');
const recipeController = require('../controllers/recipeController');

const auth = require('../services/auth')



const router = express.Router();
router.get('/', auth.isAuthenticated, recipeController.getrecipes);

router.get('/:recipe_id', recipeController.getrecipe);

router.post('/', auth.isAuthenticated, recipeController.createrecipe);

router.put('/:recipe_id', recipeController.updaterecipes);

router.delete('/:recipe_id', recipeController.deleterecipe);

module.exports = router;