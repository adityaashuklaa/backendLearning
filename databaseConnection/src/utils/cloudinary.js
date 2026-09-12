import {v2 as cloudinary} from "cloudinary" 
import fs from "fs"

// This will be provided by the cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// fs is a file system package of node, it helps in reading, writing and removing files, basically performs actions on the files.

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully!!
        // console.log("File is uploaded on cloudinary", response.url);
        // console.log(response);
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed.
        return null;
    }
}

export default uploadOnCloudinary