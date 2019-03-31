    
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({recipes: "recipes"});
})

router.get('/:id', (req, res) => {
    const { id }  = req.params
    res.json({recipes: `Recipe with id ${id}`});
})

router.post('/', (req, res) => {
    
})

router.put('/', (req, res) => {
   
})

router.delete('/',(req,res) => {
    
})

module.exports = router