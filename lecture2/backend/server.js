import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("Server is ready")
})

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => { // Standardization of the api. 
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke.'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is an another joke.'
        },
        {
            id: 3,
            title: 'A Third Joke',
            content: 'This is a third joke.'
        },
        {
            id: 4,
            title: 'This is a Fourth Joke',
            content: 'This is a fourth joke.'
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serving at port ${port}`); 
})