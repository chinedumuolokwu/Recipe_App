const mongoose = require('mongoose');
const User = require('../models/User');

exports.getusers = async function (req, res, err) {
    const users = await User.find({});

    if (!users) {
        res.status(400).send({
            success: false,
            message: 'No user registered yet'
        })
    }
    else {
        res.status(200).send({
            success: true,
            users: users
        })
    }
}

exports.getuser = async function (req, res, err) {
    const user = await User.findOne({ '_id': req.params.user_id })

    if (!user) {
        res.status(400).send({
            success: false,
            message: 'No user registered yet'
        })
    }
    else {
        res.status(200).send({
            success: true,
            user: user
        })
    }
}

exports.updateuser = async function (req, res, err) {
    const user = await User.findOne({ '_id': req.params.user_id })

    if (!user) {
        res.status(400).send({
            success: false,
            message: 'No user registered yet'
        })
    }
    else {
        res.status(200).send({
            success: true,
            user: user
        })
    }
}
