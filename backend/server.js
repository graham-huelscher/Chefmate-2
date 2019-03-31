require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

const { RecipeRoutes } = require('./Recipes')

// Middleware
app.use(bodyParser.json());


  // Routes
app.use('/recipes', RecipeRoutes)

app.get('/', (req, res) => {
    res.send(process.env.YummlyId)
})

app.get('*', (req, res) => {
    res.send('Wrong pathway');
})

  // Server Initialize
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})