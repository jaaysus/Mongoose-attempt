const express = require('express');
const router = express.Router();
const Restaurant = require('../Models/RestaurantModel');
const Chef = require('../Models/ChefModel');
const Recette = require('../Models/RecetteModel');


router.get('/all', async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});


router.get('/chefs/:restaurantname', async (req, res) => {
    const { restaurantname } = req.params;
    const restaurant = await Restaurant.findOne({ name: restaurantname });
    const chefs = await Chef.find({ restaurant: restaurant._id });
    res.json(chefs);
});


router.get('/recettes/:restaurantname', async (req, res) => {
    const { restaurantname } = req.params;
    const restaurant = await Restaurant.findOne({ name: restaurantname });
    const recettes = await Recette.find({ restaurant: restaurant._id });
    res.json(recettes);
});


router.get('/listCategorie/:category', async (req, res) => {
    const { category } = req.params;
    const restaurants = await Restaurant.find({ category });
    res.json(restaurants);
});


router.get('/list/:annee1/:annee2', async (req, res) => {
    const { annee1, annee2 } = req.params;
    const restaurants = await Restaurant.find({
        yearOpened: { $gte: annee1, $lte: annee2 }
    });
    res.json(restaurants);
});


router.post('/add', async (req, res) => {
    const { name, address, rating, category, yearOpened } = req.body;
    const newRestaurant = new Restaurant({ name, address, rating, category, yearOpened });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
});


router.put('/update/:name', async (req, res) => {
    const { name } = req.params;
    const { address, rating, category, yearOpened } = req.body;
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
        { name },
        { address, rating, category, yearOpened },
        { new: true }
    );
    res.json(updatedRestaurant);
});


router.delete('/delete/:name', async (req, res) => {
    const { name } = req.params;
    await Restaurant.findOneAndDelete({ name });
    res.json({ message: 'Restaurant deleted' });
});

module.exports = router;
