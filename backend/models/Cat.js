//backend/models/Cat.js

const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
    name: String,
    symptoms: [String],
    description: String,
    treatment: String
});

module.exports = mongoose.model('Disease', diseaseSchema);
