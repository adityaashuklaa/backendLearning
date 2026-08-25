import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended: true, limit: "16kb"})) // Data is coming from URL.
app.use(express.static("public")) // Used to store public assets, like images, videos, pdfs etc.
app.use(cookieParser()) // Cookie parser helps the server to communicate with user's browser to get the access of cookies and set cookies, basically performing CRUD Operations. Somewhere secured cookies are being stored at browser level, which only the server can read and access.

// routes import

import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register 

export default app

// app.use is used for middlewares and configuration.
// Earlier express don't used to accept json files, that's why body parser was used, but now with the updated version of express you don't need to add body parser, it is present by default.
// Multer is used for file uploading.