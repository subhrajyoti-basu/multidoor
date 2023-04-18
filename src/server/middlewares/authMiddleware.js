const JWT = require('jsonwebtoken');
const userModel = require('../models/userModel');

// Protected Routes token base
const requireSignIn = async (req, res, next) => {
    try {
        const decode = await JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode;
        next()
    } catch (error) {
        res.status(401).send({
            success: false,
            message: error.message  
        })

    }
}

// Admin access
const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: 'UnAuthorized Access'
            })
        } else next()

    } catch (error) {
        console.log(error)
    }
}

// Seller access
const isSeller = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 2) {
            return res.status(401).send({
                success: false,
                message: 'User is not a seller'
            })
        } else next()

    } catch (error) {
        console.log(error)
    }
}

module.exports = { requireSignIn, isAdmin, isSeller };