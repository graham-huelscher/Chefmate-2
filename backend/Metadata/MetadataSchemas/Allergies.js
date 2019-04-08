const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const AllergiesSchema = new Schema({
  id: {
      type: Number,
      required: true,
      unique: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  ordinal: String,
  searchValue: {
    type: String,
    required: true
  },
  localesAvailableIn: {
    type: [String],
    required: true
  }
});

const Allergies = mongoose.model('Allergies', AllergiesSchema, 'Allergies');

module.exports = Allergies;
