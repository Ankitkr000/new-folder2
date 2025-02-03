const mongoose =require("mongoose")

const userSchema= new mongoose.Schema({
    name:{type:String},
    Username:{type:String},
    Email:{type:String},
    Password:{
        type:String,
        minLength:4,
        maxLength:16,

    },
    
})

module.exports = mongoose.model("User",userSchema)