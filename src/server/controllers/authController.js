const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
const JWT = require('jsonwebtoken');


const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // validation
        if (!name) {
            return res.send({ error: 'Name is Required' })
        }

        // check user
        const existingUser = await userModel.findOne({ email: email })

        // existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already Register please login'
            })
        }

        // register user
        const hashedPassword = await hashPassword(password);

        // save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save()

        res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}

// POST LOGIN
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation 
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }

        // check user
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not Registered'
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) return res.status(200).send({
            success: false,
            message: 'Invalid Password'
        })

        // token
        const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.status(200).send({
            success: true,
            message: 'login Successful',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                addres: user.address
            },
            token
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
    }
}

const testController = (req, res)=> {
    console.log('protected route')
    res.send('Protected Route')
}

module.exports = { registerController, loginController, testController };