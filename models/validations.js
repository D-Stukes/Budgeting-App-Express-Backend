const transactions = require("./transactions")

const validateURL = (req, res, next) =>{
    if(typeof(req.body.amount) !=='number'){
        console.log("Please enter a number")
        res.status(422).json('Invalid data type, please enter a number.')
    }
    else {
        next()
    }
  
}
module.exports = {validateURL}

