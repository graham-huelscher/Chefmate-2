const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const CuisinesSchema = new Schema({
  id: {
      type: String,
      required: true,
      unique: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  searchValue: {
    type: String,
    required: true
  },
  localesAvailableIn: {
    type: [String],
    required: true
  }
});

const Cuisines = mongoose.model('Cuisine', CuisinesSchema, 'Cuisines');

module.exports = Cuisines;