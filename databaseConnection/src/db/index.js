import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.error("MONGODB Connection ERROR", error)
        process.exit(1) // Node.js gives you access of process, which can be used to exit by using different status codes, like in this case 1.
    }
}

export default connectDB