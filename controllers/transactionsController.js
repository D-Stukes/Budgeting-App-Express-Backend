
//DEPENDENCIES
// const { v4: uuidv4 } = require('uuid')
const express = require("express")
const transactionsController = express.Router()
const transactionsArray = require('../models/transactions.js')

const { validateURL } = require('../models/validations.js')


//GET ROUTE FOR /transactions (app.use in app.js handles the transactions)
transactionsController.get('/', (req, res) =>{
    res.json(transactionsArray)
})

//POST ROUTE - transactions endpoint for POST
transactionsController.post("/",validateURL, (req, res)=>{
    // const itemID = uuid()
    // req.body[transactionId] = itemID
    transactionsArray.push(req.body)
    res.json(transactionsArray.at(-1))
})  //at -1 means end of array length - 1, so it will display the last element posted


//SHOW ROUTE
transactionsController.get('/:index', (req, res) =>{
    const {index} = req.params
    if(transactionsArray[index]) {
       res.status(200).json(transactionsArray[index])
    } else {
    //    res.status(404).json({error: "Not Found"})
    res.redirect("/*")
    }
})

//DELETE ROUTE
transactionsController.delete("/:index", (req,res) => {
    const { index } = req.params
    const deletedTransaction = transactionsArray.splice (index, 1) 
    res.status(200).json(deletedTransaction) 
})


//PUT ROUTE
transactionsController.put("/:index", (req,res) => {
    const {index} = req.params
    if(transactionsArray[index]) {
        transactionsArray[index] =req.body
        res.status(200).json(transactionsArray[index])
    } else {
        res.status(404).json({message: "Not Found"})
    }
   })

   module.exports = transactionsController