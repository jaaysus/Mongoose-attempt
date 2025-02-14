const express = require('express');
const router = express.Router();
const Recette = require('../Models/RecetteModel');
const Chef = require('../Models/ChefModel');

// Get all recettes with their associated chef details
router.get('/all', async (req, res) => {
    const recettes = await Recette.find().populate('chef', 'name specialty');
    res.json(recettes);
});

// Get all recette titles
router.get('/names', async (req, res) => {
    const recettes = await Recette.find().select('title');
    res.json(recettes);
});

// Add a new recette associated with a chef
router.post('/add', async (req, res) => {
    const { title, ingredients, instructions, chefId } = req.body;

    const chef = await Chef.findById(chefId);
    if (!chef) {
        return res.status(404).json({ error: 'Chef not found' });
    }

    const newRecette = new Recette({ title, ingredients, instructions, chef: chefId });
    await newRecette.save();
    res.status(201).json(newRecette);
});

// Update a recette by its title
router.put('/update/:name', async (req, res) => {
    const { name } = req.params;
    const { title, ingredients, instructions, chefId } = req.body;

    if (chefId) {
        const chef = await Chef.findById(chefId);
        if (!chef) {
            return res.status(404).json({ error: 'Chef not found' });
        }
    }

    const updatedRecette = await Recette.findOneAndUpdate(
        { title: name },
        { title, ingredients, instructions, chef: chefId },
        { new: true }
    );

    if (!updatedRecette) {
        return res.status(404).json({ error: 'Recette not found' });
    }

    res.json(updatedRecette);
});

// Delete a recette by its title
router.delete('/delete/:name', async (req, res) => {
    const { name } = req.params;

    const recette = await Recette.findOneAndDelete({ title: name });
    if (!recette) {
        return res.status(404).json({ error: 'Recette not found' });
    }

    res.json({ message: 'Recette deleted' });
});

module.exports = router;
