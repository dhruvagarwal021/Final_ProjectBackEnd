
const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    "fname":{type:String},
    "lname":{type:String},
    "phno":{type:Number},
    "email":{type:String},
    "password":{type:String}
},{
    collection:"users"
})

module.exports=mongoose.model("UserSchema",UserSchema);