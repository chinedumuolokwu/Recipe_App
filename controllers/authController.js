const bcrypt = require('bcrypt');
const User = require('../models/User');
const tokenGenerator = require('../services/auth');

exports.register = async function (req, res, error) {
    //Search if the email exists
    User.findOne({ email: req.body.email }).then(found => {
        if (found) {
            res.status(400).send({
                success: false,
                message: 'A user with this email already exists'
            })

        } else {
            //hash the password from the body
            bcrypt.hash(req.body.password, 10, function (error, encyptedPassword) {
                if (error) { res.send({ status: 500, error: error }) }
                else {
                    const user = new User({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: encyptedPassword,
                        address: req.body.address,
                        phone_number: req.body.phone_number
                    })

                    //Save the user to the database       
                    user.save(function (error, user) {
                        if (error) {
                            res.send({
                                status: 401,
                                success: false,
                                message: error
                            })
                        } else {
                            const token = tokenGenerator.generateToken(user)
                            //    console.log(token);
                            res.status(200).send({
                                success: true,
                                message: 'Registration Successful',
                                token: token,

                            })



                        };

                        //    tokenGenerator.generateToken(user).then(token => {
                        //        res.status(200).send({
                        //            success: true,
                        //            message: 'Registration Successful',
                        //            token: token,

                        //        })
                    })
                }

            })

        }
    })
}

exports.login = async function (req, res, error) {
    let user = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: user.email }).exec().then((found) => {

        if (found) {
            // console.log(found)
            bcrypt.compare(user.password, found.password).then((userPassword) => {
                if (!userPassword) {

                    res.status(400).send({
                        success: false,
                        message: "Incorrect Credentials"
                    })

                }
                else {
                    console.log("UserPassword", userPassword)
                    const token = tokenGenerator.generateToken(found);
                    res.send({
                        status: 200,
                        success: true,
                        message: 'Authentication successful',
                        token: token,
                        user: {
                            email: found.email,
                            role: found.role
                        }

                    })
                }
                // }).catch(error => {
                //     res.send({              
                //         status: 500,
                //         success: false,
                //         error: error.message
                //     })
                // })



            })
        }

    })
}