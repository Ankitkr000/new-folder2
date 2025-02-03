const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://ankitkr1001a:5jCCB6M2TtEAJT79@cluster0.5z0g2.mongodb.net/")

const db=mongoose.connection

module.exports=db


