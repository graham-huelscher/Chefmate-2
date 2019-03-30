"use strict"
const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Index');
  })

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})