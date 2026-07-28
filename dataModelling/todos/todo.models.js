import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false // Can be added with any field, but here it makes sense.
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" // The name inside mongoose.model is being called here.
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ] // Array of subTodos
    }, {timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema)

// createdBy is a special type which requries a reference to create a relation with another schema.