const mongoose =require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String,min:1},
    Username:{type:String,min:1},
    Email:{type:String},
    Password:{
        type:String,
        minLength:4,
        maxLength:16,

    },
    
})

module.exports = mongoose.model("User",userSchema)