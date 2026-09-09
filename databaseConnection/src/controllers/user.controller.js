import asyncHandler from "../utils/asyncHandler"
import {ApiError} from "../utils/ApiError"
import {User} from "../models/user.model.js"
import uploadOnCloudinary from "../utils/cloudinary.js"
import { upload } from "../middlewares/multer.middleware"

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend (No need to write frontend, we can simulate it using postman.)
    // validation of user details - not empty
    // check if user already exits - unique email || unique username
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in DB.
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const {fullname, email, username, password} = req.body
    console.log("email: ", email);

    if(
        [fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required.")
    }

    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })
    if(existedUser) {
        throw new ApiError(409, "User with username or email already exists.")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    if(!avatarLocalPath) throw new ApiError(400, "Avatar file is required.")
    await uploadOnCloudinary(avatarLocalPath)
})

export default registerUser

// Because the cloudinary is an expensive function and it has to awaited we have used async in the parameter of the function.