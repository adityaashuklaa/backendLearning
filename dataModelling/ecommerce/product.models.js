import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String, // Sequence doesn't matter in objects.
    },
    name: {
        required: true,
        type: String,
    }, 
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    }, 
    stock: {
        default: 0,
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)

// You can store images inside the DB in buffer format, but you shouldn't do that, cause that makes the DB so heavy, and that's not the job of the DB to store buffer types values like PDFs, Images, Videos etc.
// You should be storing it in your server unser public folder, like in our case OnlineImages, or use of third party services like aws bucket, cloudinary. You upload your media over here and their sdk provides a link which you can store in your db.