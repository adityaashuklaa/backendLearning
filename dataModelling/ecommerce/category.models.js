import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Category = mongoose.model("Category", categorySchema)

// If the name of model is categories, then also mongoose will store it like this "categories", no change.