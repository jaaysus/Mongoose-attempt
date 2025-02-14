const express = require('express');
const router = express.Router();
const Chef = require('../Models/ChefModel');
const Recette = require('../Models/RecetteModel');
const Restaurant = require('../Models/RestaurantModel');


router.get('/all', async (req, res) => {
    const chefs = await Chef.find().populate('restaurant', 'name address');
    res.json(chefs);
});


router.get('/names', async (req, res) => {
    const chefs = await Chef.find().select('name');
    res.json(chefs);
});


router.get('/recettes', async (req, res) => {
    const chefs = await Chef.find();
    const chefRecettes = [];

    for (let chef of chefs) {
        const count = await Recette.countDocuments({ chef: chef._id });
        if (count > 0) {
            chefRecettes.push({ name: chef.name, recipeCount: count });
        }
    }

    res.json(chefRecettes);
});



router.post('/add', async (req, res) => {
    const { name, specialty, restaurantId } = req.body;
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
    }

    const newChef = new Chef({ name, specialty, restaurant: restaurantId });
    await newChef.save();
    res.status(201).json(newChef);
});


router.put('/update/:name', async (req, res) => {
    const { name } = req.params;
    const { specialty } = req.body;
    const updatedChef = await Chef.findOneAndUpdate(
        { name },
        { specialty },
        { new: true }
    );

    if (!updatedChef) {
        return res.status(404).json({ error: 'Chef not found' });
    }

    res.json(updatedChef);
});


router.delete('/delete/:name', async (req, res) => {
    const { name } = req.params;
    const chef = await Chef.findOne({ name });

    if (!chef) {
        return res.status(404).json({ error: 'Chef not found' });
    }

    
    await Recette.deleteMany({ chef: chef._id });

    await chef.remove();
    res.json({ message: 'Chef and their recettes deleted' });
});

module.exports = router;
