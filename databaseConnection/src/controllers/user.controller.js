import asyncHandler from "../utils/asyncHandler"
import {ApiError} from "../utils/ApiError"
import {User} from "../models/user.model.js"
import uploadOnCloudinary from "../utils/cloudinary.js"
import ApiResponse from "../utils/ApiResponse.js"

const generateAccessAndRefreshTokens = async(userId) => {
    {
        try {
            const user = await User.findById(userId)
            const accessToken = user.generateAccessToken()
            const refreshToken = user.generateRefreshToken() 

            user.refreshToken = refreshToken
            await user.save({validateBeforeSave: false}) // We know what we are doing that's why no requirement of validation

            return {accessToken, refreshToken}

        } catch (error) {
            throw new ApiError(500, "Something went wrong while generating refresh and access tokens.")
        }
    }
}

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

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if(existedUser) {
        throw new ApiError(409, "User with username or email already exists.")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if(!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required.")
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar) {
        throw new ApiError(400, "Avatar file is required.")
    }

    const user = User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        usernmae: username.tolowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user!!")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully!!")
    )

})

const loginUser = asyncHandler( async (req, res) => {
    // req body => data
    // username or email
    // find the user
    // password check
    // access and refresh token
    // send cookie (secure cookie)

    const {email, username, password} = req.body
    if(!username || !email) {
        throw new ApiError(400, "username or email is required.")
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if(!user) {
        throw new ApiError(404,  "User does not exist")
    }
    
    const isPasswordValid = await user.isPasswordCorrect(password)
    
    if(!isPasswordValid) {
        throw new ApiError(401,  "Invalid User Credentials")
    }


})

export default { registerUser, loginUser }

// Because the cloudinary is an expensive function and it has to awaited we have used async in the parameter of the function.
// mongoose generates bson data, and here in registerUserData, the id is bson_id.