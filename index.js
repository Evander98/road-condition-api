const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 2000

const { roadRouter } = require("./router")

app.use(bodyParser.json())

app.use('/road', roadRouter)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Road-Condition API</h1>")
})

app.listen(port, () => console.log("Server Running on Port " + port))