require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')
const mongoose = require('./Config/MongoDBConnection')

const { RecipeRoutes } = require('./Recipes')

// Middleware
app.use(bodyParser.json());


// Routes
app.use('/recipes', RecipeRoutes)

app.get('*', (req, res) => {
  res.send('Wrong pathway');
})

// Server Initialize
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

// require the mongoose model from CoffeeShop.js
const CoffeeShop = require('./CoffeeShop');

// create an instance of the CoffeeShop
// note: it hasn't been saved to the database yet
// let newCoffeeShop = CoffeeShop(
//   {
//     name: "Quantum",
//     address: "Granville St",
//     rating: 5
//   }
// );

// // save the newly created coffeeshop in the database
// newCoffeeShop.save()
//   .then(coffeeshop => {
//     console.log('Coffeeshop created.')
//   })
//   .catch(err => {
//     console.log(err);
//   })

CoffeeShop.find({})
    .then(coffeeShops => {
        // loop through the array of coffeeShops
        for(let i = 0; i < coffeeShops.length; i++){
            // each coffee shop has a summary method attached to it
            console.log(coffeeShops[i].summary());
        }
    })
    .catch(err => {
        console.log(err);
    })
