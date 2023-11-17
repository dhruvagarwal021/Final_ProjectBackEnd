
const mongoose=require("mongoose");
const PetsSchema=new mongoose.Schema({
    "Category":{type:String},
    "age":{type:Number},
    "sex":{type:String},
    "condition":{type:String},
    "weight_kg":{type:Number}
},{
    collection:"pets"
});

module.exports=mongoose.model("PetsSchema",PetsSchema);