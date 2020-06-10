// require modules 
const express = require("express");
const router = express.Router()
// require schema
const registerModel = require('../models/register.model')

// registration api
router.post('/register', (req, res) => {
    new registerModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).save()
        .then(registeredUser => {
            res.status(200).json({
                message: "Registered Successfully!",
                result: registeredUser
            })
        })
        .catch(error => {
            res.status(404).json({
                message: "Registered Not Successfully!"
            })
        })
})

// login api
router.post('/login', (req, res) => {
    // extractting email, password
    let email = req.body.email;
    let password = req.body.password;

    // matching email for getting exact result
    registerModel.findOne({ email: email })
        .then(userData => {
            // checking email
            if (!userData) {
                res.status(401).json({
                    message: "Invalid Email"
                })
            }
            // checking password
            else if (userData.password !== password) {
                res.status(401).json({
                    message: "Invalid Password"
                })
            } else {
                // login successfully after checking
                res.status(200).json({
                    message: "Login Successfully!",
                    result: userData
                })
            }
        })
        .catch(err => {
            // catching error if there is any
            res.status(404).json({
                message: "Not Found"
            })
        })
})

module.exports = router