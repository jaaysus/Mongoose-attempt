const express = require('express');
const router = express.Router();
const Chef = require('../Models/ChefModel');
const Recette = require('../Models/RecetteModel');


router.get('/all', async (req, res) => {
    const chefs = await Chef.find();
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
        chefRecettes.push({ name: chef.name, recipeCount: count });
    }
    
    res.json(chefRecettes);
});


router.post('/add', async (req, res) => {
    const { name, specialty } = req.body;
    const newChef = new Chef({ name, specialty });
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
    res.json(updatedChef);
});


router.delete('/delete/:name', async (req, res) => {
    const { name } = req.params;
    await Chef.findOneAndDelete({ name });
    res.json({ message: 'Chef deleted' });
});

module.exports = router;
