
//DEPENDENCIES
const { v4: uuidv4 } = require('uuid')
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
    const itemID = uuidv4()
    req.body[transactionId] = itemID
    transactionsArray.push(req.body)
    res.json(transactionsArray.at(-1))
})  //at -1 means end of array length - 1, so it will display the last element posted


//SHOW ROUTE
transactionsController.get('/:id', (req, res) =>{
    const {id} = req.params


   const selectedTransaction = transactionsArray.find(({transactionId}) => transactionId === id)
   if(selectedTransaction) {
    res.status(200).json(selectedTransaction)
   } else {
    res.redirect("/*")
   }
})

//DELETE ROUTE
transactionsController.delete("/:id", (req,res) => {
    const { id } = req.params
    const selectedTransactionIndex = transactionsArray.findIndex((transaction) => transaction.transactionId === id)
    const deletedTransaction = transactionsArray.splice (selectedTransactionIndex, 1) 
    res.status(200).json(deletedTransaction) 
})


//PUT ROUTE
transactionsController.put("/:id", validateURL, (req,res) => {
    const {id} = req.params
    const selectedTransactionIndex = transactionsArray.findIndex((transaction) => transaction.transactionId === id)
    if(selectedTransactionIndex !== -1){
        transactionsArray[selectedTransactionIndex]={...transactionsArray[selectedTransactionIndex],...req.body}
        //the findIndex method will return a -1 if it doesn't find a match

        // the transactionsArray[selectedTransactionIndex] points to the selected element that is being edited. On the right side of the EQUAL sign, the current element is being copied and the req.body that contains the actual edits is also being copied into that index. Any  parts of these to objects that have the same key name, will result in the edits in req.body overwriting the current key value. This allows both PUT and PATCH to work correctly. Otherwise, I could just overwrite the current element with the req.body, but could render empty values in the case of using Patch.
    }
    

    else {
        res.status(404).json({message: "Not Found"})
    }
   })

   module.exports = transactionsController