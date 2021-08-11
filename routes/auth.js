const express = require('express');

const auth = require('../services/auth')

const { isAuthenticated } = auth.isAuthenticated

const router = express.Router();

const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);


module.exports = router;