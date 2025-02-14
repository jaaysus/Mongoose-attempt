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

    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
    }

    const chefs = await Chef.find({ restaurant: restaurant._id });
    res.json(chefs);
});


router.get('/recettes/:restaurantname', async (req, res) => {
    const { restaurantname } = req.params;
    const restaurant = await Restaurant.findOne({ name: restaurantname });

    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
    }

    const chefs = await Chef.find({ restaurant: restaurant._id });
    const chefIds = chefs.map(chef => chef._id);
    const recettes = await Recette.find({ chef: { $in: chefIds } });
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

    if (!updatedRestaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.json(updatedRestaurant);
});


router.delete('/delete/:name', async (req, res) => {
    const { name } = req.params;
    const restaurant = await Restaurant.findOne({ name });

    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
    }

    
    const chefs = await Chef.find({ restaurant: restaurant._id });
    const chefIds = chefs.map(chef => chef._id);

    await Recette.deleteMany({ chef: { $in: chefIds } });
    await Chef.deleteMany({ restaurant: restaurant._id });
    await restaurant.remove();

    res.json({ message: 'Restaurant, its chefs, and their recettes deleted' });
});

module.exports = router;
