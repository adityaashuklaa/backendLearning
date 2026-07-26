require('dotenv').config()
const express = require("express") // require module syntax. (common js)
// import express from "express" // module js syntax, newer version.
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!!")
})

app.get('/twiter', (req, res) => {
    res.send('https://x.com/adityaashuklaa')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at my server !!! </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})