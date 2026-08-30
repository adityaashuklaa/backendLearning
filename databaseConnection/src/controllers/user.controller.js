import asyncHandler from "../utils/asyncHandler"

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
    
})

export default registerUser