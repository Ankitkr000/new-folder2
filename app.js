const express = require("express")
const app=express()

const userModel=require("./models/userModel")

app.post("/signup",async (req,res)=>{
    try{
            const {name,Email,Password,Username}=req.body;

            if(Password.length>16 || Password.length<4){
                res.status(400).send("Password must be under 16")
            }

            if(!name){
                res.status(400).send("Name field cannot be empty")
            }
            if(!Username){
                res.status(400).send("Username field cannot be empty")
            }
            if(!Email){
                res.status(400).send("Email field cannot be empty")
            }

            const newUser=new userModel({name,Email,Password,Email})

            await newUser.save()
}catch (err){
    res.send(err.message)
    
}


})



app.listen(3000,()=>{
    console.log("running")
})