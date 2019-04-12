
const express = require('express')
const router = express.Router()
const RecipeController  = require('./RecipeController')

router.get('/', async (req, res) => {

    const weeklyRecipes = await RecipeController.getWeeklyRecipes({ 'test': null })
    res.json(weeklyRecipes)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const recipeData = await RecipeController.getRecipeDetails(id)
    res.json(recipeData)
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router