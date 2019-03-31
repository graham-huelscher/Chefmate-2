    
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({recipes: "recipes"});
})

router.post('/', (req, res) => {
    
})

router.put('/', (req, res) => {
   
})

router.delete('/',(req,res) => {
    
})

module.exports = router