const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const testSchema = new Schema({
    searchTerms: [Number]
});

const test = mongoose.model('test', testSchema, 'test');

module.exports = test;