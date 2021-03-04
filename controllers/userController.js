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
    let updated_user = await User.findByIdAndUpdate(req.params.user_id,
        req.body, { new: true })
    try {
        return res.status(200).send({
            success: true,
            user: updated_user
        })
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: error
        })
    }
}

exports.deleteuser = async function (req, res, err) {
    const _id = req.params.user_id;
    const user = await User.findByIdAndRemove(_id);
    if (!user) {
        res.status(404).send(
            {
                success: false,
                message: "User not found"
            }
        )
    }

    else {
        res.status(200).send(
            {
                success: true,
                message: "User has been deleted"
            }
        )
    }
}
