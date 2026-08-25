import {v2 as cloudinary} from "cloudinary" 
import fs from "fs"

// This will be provided by the cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// fs is a file system package of node, it helps in reading, writing and removing files, basically performs actions on the files.