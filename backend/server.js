"use strict"
const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

const { RecipeRoutes } = require('./Recipes')

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Index');
  })

  // Routes
app.use('/recipes', RecipeRoutes)

  // Server Initialize
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})