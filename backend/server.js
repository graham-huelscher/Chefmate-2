require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')
const mongoose = require('./Config/MongoDBConnection')

const MetadataController = require('./Metadata/MetadataController')
const { RecipeRoutes } = require('./Recipes')

MetadataController.getMetadata();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/recipes', RecipeRoutes)

// Server Initialize
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
