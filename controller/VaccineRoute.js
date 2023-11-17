
const express=require("express");
const VaccineSchema=require("../model/VaccineSchema");
const VaccineRoute = express.Router();
const mongoose=require("mongoose");

VaccineRoute.post("/vaccinate",(req,res)=>{
    VaccineSchema.create(req.body,(err,data)=>{
        if(err)
        {
            return err;
        }
        else
        {
            res.json(data);
        }
    });
});

VaccineRoute.get("/",(req,res)=>{
    VaccineSchema.find((err,data)=>{
        if(err)
        {
            return err;
        }
        else
        {
            res.json(data);
        }
    });
});

module.exports=VaccineRoute;