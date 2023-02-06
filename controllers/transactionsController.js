//DEPENDENCIES
// const { v4: uuidv4 } = require('uuid')
const express = require("express")
const transactions = express.Router()
const transactionsArray = require('../models/transactions.js')
const { validateURL } = require('../models/validations.js')


//GET ROUTE 
transactions.get('/', (req, res) =>{
    res.json(transactionsArray)
})


//SHOW ROUTE
transactions.get('/:index', (req, res) =>{
    const {index} = req.params
    if(transactionsArray[index]) {
       res.status(200).json(transactionsArray[index])
    } else {
    //    res.status(404).json({error: "Not Found"})
    res.redirect("/*")
    }
})




//POST ROUTE - transactions endpoint for POST
transactions.post("/",validateURL, (req, res)=>{
    // const itemID = uuid()
    // req.body[transactionId] = itemID
    transactionsArray.push(req.body)
    res.json(transactionsArray.at(-1))
})  //at -1 means end of array length - 1, so it will display the last element posted


//PUT ROUTE
transactions.put("/:index", (req,res) => {
    const {index} = req.params
    if(transactionsArray[index]) {
        transactionsArray[index] = req.body
        res.status(200).json(transactionsArray[req.params.index])
    } else {
        res.status(404).json({message: "Not Found"})
    }
   })

//DELETE ROUTE
transactions.delete("/:index", (req,res) => {
    const { index } = req.params
    const deletedTransaction = transactionsArray.splice (index, 1) 
    res.status(200).json(deletedTransaction) 
})



   module.exports = transactions