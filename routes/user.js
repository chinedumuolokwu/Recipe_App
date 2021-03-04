const express = require('express');
// // I NEED TO USE JOI INSTEAD OF THIS ONE    const { body } = require('express-validator');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getusers);

router.get('/:user_id', userController.getuser);

router.put('/:user_id', userController.updateuser);

router.delete('/:user_id', userController.deleteuser);

// router.get('/', [], userService.exist);

// router.post('/', [body('email').isEmail()], userService.signUp);

// router.post('/sign-in', [body('email').isEmail()], userService.signIn);

// router.put('/', (req, res) => {
//   res.status(200).send("update a user");
// });

// router.delete('/', (req, res) => {
//   res.status(204).send("remove a user");
// });

module.exports = router;