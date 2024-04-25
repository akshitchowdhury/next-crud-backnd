import mongoose from "mongoose"

import dotenv from 'dotenv'

dotenv.config()


const connectMongoDb = async ()=>{
    try {
        
       await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}`)
        console.log("connected to Mongo DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb;