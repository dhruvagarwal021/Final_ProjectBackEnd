
const mongoose=require("mongoose");
const VaccineSchema=new mongoose.Schema({
    "clientPhno":{type:Number},
    "category":{type:String},
    "age":{type:Number},
    "petSex":{type:String},
    "vaccine":{type:String}
},{
    collection:"vaccination"
})

module.exports=mongoose.model("Vaccine", VaccineSchema);