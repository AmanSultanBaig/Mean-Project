// require modules 
const express = require("express");
const router = express.Router()
// require schema
const registerModel = require('../models/register.model')

router.post('/register', (req, res) => {
    let register = new registerModel({
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

module.exports = router