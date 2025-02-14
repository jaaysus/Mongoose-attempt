const mongoose = require('mongoose');

const ChefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }
});

module.exports = mongoose.model('Chef', ChefSchema);
