const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const modelUser=require('./models/UserDB');

const app=express();
app.use(cors(
    {
        origin:["https://crud-frontend-app.vercel.app"],
        methods:["POST","PUT","DELETE","GET"],
        credentials: true
    }
));
app.use(express.json());

mongoose.connect("mongodb+srv://himanbiswas376:cZczEOMw9Q7kUI3j@yousaf.qbu4mkd.mongodb.net/userDBs?retryWrites=true&w=majority");

app.post("/create",(req,res)=>{
    modelUser.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get("/",(req,res)=>{
    modelUser.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err));
})

app.get('/get/:id',(req,res)=>{
    const id=req.params.id;
    modelUser.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    modelUser.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    modelUser.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.listen(5000,()=>{
    console.log('Server running at port 5000');
})
