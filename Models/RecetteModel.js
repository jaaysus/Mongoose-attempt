const mongoose = require('mongoose');

const RecetteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef', required: true }
});

module.exports = mongoose.model('Recette', RecetteSchema);
