const express = require('express');

const cartController = require('../controllers/cartController')

const auth = require('../services/auth');

const router = express.Router();

router.post('/add/:recipe_id', auth.isAuthenticated, cartController.addRecipeToCart);

module.exports = router;