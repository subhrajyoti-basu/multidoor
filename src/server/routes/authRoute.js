const express = require('express');
const { registerController, loginController, testController } = require('../controllers/authController');
const {requireSignIn, isAdmin, isSeller} = require('../middlewares/authMiddleware');


// router object
const router = express.Router()

// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || METHOD POST
router.post('/login', loginController)

// protected route
router.get('/user-seller', requireSignIn, isSeller, (req,res) => {
    res.status(200).send({ok: true});
})

// TEST CONTROLLER
router.get('/test', requireSignIn, isAdmin, testController)

module.exports = router;