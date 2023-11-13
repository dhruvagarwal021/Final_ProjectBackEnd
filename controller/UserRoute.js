
const express=require("express");
const UserSchema=require("../model/UserSchema");
const UserRoute=express.Router();
const mongoose=require("mongoose");

UserRoute.post("/register",(req,res)=>{
    UserSchema.create(req.body,(err,data)=>{
        if(err)
        {
            return err;
        }
        else
        {
            res.json(data);
        }
    })
})

UserRoute.post("/login",(req,res)=>{
    const {loginId, password} = req.body;
    
    UserSchema.findOne({phno:loginId}, (err, user) =>{
        if(err)
        {
            return res.status(500).json({error:"Internal server error"});
        }

        if(!user)
        {
            return res.status(401).json({error : "Invalid login credentials"});
        }

        if(user.password != password)
        {
            return res.status(401).json({error : "Invalid login credentials"});
        }

        res.status(200).json({success:"true", user:"user"});
    });
});


UserRoute.get("/",(req,res)=>{
    UserSchema.find((err,data)=>{
        if(err)
        {
            return err;
        }
        else
        {
            res.json(data);
        }
    })
})
module.exports=UserRoute;