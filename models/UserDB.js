const mongoose =require('mongoose');

const userSchema=new mongoose.Schema({
    "name":String,
    "email":String,
    "age":Number
});

const modelUser=mongoose.model("userDBs",userSchema);
module.exports=modelUser;