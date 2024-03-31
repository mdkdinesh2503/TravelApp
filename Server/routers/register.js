const express = require("express");
const router = express.Router();

const mongoose = require('mongoose');

const registerModel = require("../models/register.model");

// Get Details
router.get("/list", (req, res, next) => {

    registerModel.find(function(err, registerListResponse) {
        if(err) {
            res.send({status: 500, message: 'Unable to Find Register'});
        }else {
            const recordCount = registerListResponse.length;
            res.send({status: 200,recordCount : recordCount, results: registerListResponse});
        }
    });  
});

// Create Register
router.post("/add", (req, res, next) => {

    let userNameVal = req.body.UserName;
    let emailVal = req.body.Email;
    let passwordVal = req.body.Password;

    let registerObj = new registerModel({
        UserName: userNameVal,
        Email: emailVal,
        Password: passwordVal
    });

    registerObj.save((err, registerObj)=>{
        if(err) {
            res.send({status: 500, message: 'Unable to add Register'});
        }else {
            res.send({status: 200, message: 'Register Added Successfully', registerDetails: registerObj});
        }
    });
  
    res.send({status: 200, message: 'Register Added Successfully', registerDetails: registerObj});
});

// Update Register
router.put("/update", (req, res, next) => {
    res.send("respond with a response");   
});

// Delete Register
router.delete("/delete", (req, res, next) => {
    res.send("respond with a response");   
});

// Search Register
router.get("/search", (req, res, next) => {
    res.send("respond with a response");   
});

module.exports = router;