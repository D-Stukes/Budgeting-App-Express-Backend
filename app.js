
//DEPENDENCIES
const express = require('express')
const transactionsController = require("./controllers/transactionsController.js")
const morgan = require('morgan')
const cors = require('cors')


//CONFIGURATION
const app = express()
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())
app.use("/transactions", transactionsController)

//ROUTES
app.get("/", (req, res) =>{
    res.send("Welcome to the Budgeting App")
})

app.get("*", (req, res) =>{
    res.status(401).json('Sorry, there is an error. ')
})


 module.exports = app