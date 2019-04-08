const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const IngredientsSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  searchValue: {
    type: String,
    required: true
  }
});

const Ingredients = mongoose.model('Ingredients', IngredientsSchema, 'Ingredients');

module.exports = Ingredients;
