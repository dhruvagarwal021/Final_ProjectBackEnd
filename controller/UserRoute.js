
const express = require("express");
const UserSchema = require("../model/UserSchema");
const UserRoute = express.Router();
const mongoose = require("mongoose");

UserRoute.post("/register", async (req, res) => {
    const existingUserPh = await UserSchema.findOne({ phno: req.body.phno });
    const existingUserEmail = await UserSchema.findOne({ email: req.body.email });

    if (existingUserPh || existingUserEmail) {
        return res.status(409).json({ error: 'User already registered !' });
    }
    else {
        UserSchema.create(req.body, (err, data) => {
            if (err) {
                res.status(500).json({ error: 'Internal Server error' });
            }
            else {
                res.json(data);
            }
        });
    }
});

UserRoute.post("/login", (req, res) => {
    const {loginId, password } = req.body;

    UserSchema.findOne({ phno: loginId}, (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }

        if (!user) {
            return res.status(401).json({ error: "Invalid login credentials" });
        }

        if (user.password != password) {
            return res.status(401).json({ error: "Invalid login credentials" });
        }

        const {fname} = user;
        res.status(200).json({ success: "true", user: {fname} });
    });
});

UserRoute.post("/change-pw", async (req, res) => {
    const {phno,email,newPassword} = req.body;

    const existingUser = await UserSchema.findOne({phno,email});

    if (existingUser) {

        existingUser.password=newPassword;

        existingUser.save((err,updatedUser)=>{
            if(err)
            {
                res.status(500).json({error:'Internal Server error'});
            }
            else
            {
                res.json({success:true, message:'Password successfully '})
            }
        });
    }
    else
    {
        return res.status(409).json({ error: 'Credentials Mis-Match !' });
    }
});


UserRoute.get("/", (req, res) => {
    UserSchema.find((err, data) => {
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    })
})
module.exports = UserRoute;