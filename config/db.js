const mongoose=require("mongoose")

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.URL}`)
        console.log(`MongoDB is connected`)
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = connectDB