const express = require("express") // require module syntax. (common js)
// import express from "express" // module js syntax, newer version.
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})