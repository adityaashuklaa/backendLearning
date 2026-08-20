//require('dotenv').config({path: './env'}) // The code will for sure work, but has inconsistency as other file are being imported using import method and here require syntax is being used.
import dotenv from 'dotenv' // import syntax is not available as if now, but we can use it using experimental features.
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()



// IIFE Approach to connect to DB.
/*
import express from express;

const app = express()
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
            
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()
    */