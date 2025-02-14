const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    rating: { type: Number, required: true },
    category: { type: String }, 
    yearOpened: { type: Number } 
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);