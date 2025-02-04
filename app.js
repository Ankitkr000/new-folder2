const express = require("express")
const app=express()
const connectDB = require('./config/db')
require('dotenv').config()

const cors=require("cors")

app.use(cors({
    origin: "*",
    credentials: true
}))



const userModel=require("./models/userModel")
app.use(express.json())

app.post("/signup", async (req,res)=>{
    try{
            const {name,Email,Password,Username}=req.body;
            if(!Password){
                return res.status(400).send("error")
            }
           if(Password.length > 16 || Password.length < 4){
               return res.status(400).send("Password must be under 16")
            }

            if(!name){
                return res.status(400).send("Name field can be empty")
            }
            if(!Username){
               return res.status(400).send("Username field cannot be empty")
            }
            if(!Email){
                return res.status(400).send("Email field cannot be empty")
            }

            const newUser= await new userModel({name,Email,Password,Email})

            await newUser.save()
            return res.status(201).json(newUser)
}catch (err){
    return res.send(err.message)
    
}


})



app.get("/",(req,res)=>{
    res.send("hello first page")
})


connectDB()
.then(()=>{
    app.listen(4000,()=>{
        console.log(`Server is running at 4000`)
    })
})
.catch((err)=> console.log(err.message))