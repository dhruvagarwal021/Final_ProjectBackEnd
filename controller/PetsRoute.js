
const express=require("express");
const PetsSchema=require("../model/PetsSchema");
const PetsRoute = express.Router();
const mongoose = require("mongoose");

PetsRoute.get("/",(req,res)=>{
    PetsSchema.find((err,data)=>{
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

PetsRoute.delete("/sell-pet/:id",(req,res)=>{
    PetsSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
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

module.exports = PetsRoute;