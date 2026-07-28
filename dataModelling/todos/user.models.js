import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "Password is required."]
        },
    }, {timestamps: true}
)

export const User = mongoose.model("User", userSchema)

// Whatever name is given to the model, when it will be connected to database and stored in a table it stores in lowercase with 's format, like in this case, User will be users in the db.