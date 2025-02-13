const express = require('express');
const router = express.Router();
const Recette = require('../Models/RecetteModel');


router.get('/all', async (req, res) => {
    const recettes = await Recette.find();
    res.json(recettes);
});


router.get('/names', async (req, res) => {
    const recettes = await Recette.find().select('title');
    res.json(recettes);
});


router.post('/add', async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const newRecette = new Recette({ title, ingredients, instructions });
    await newRecette.save();
    res.status(201).json(newRecette);
});


router.put('/update/:name', async (req, res) => {
    const { name } = req.params;
    const { title, ingredients, instructions } = req.body;
    const updatedRecette = await Recette.findOneAndUpdate(
        { title: name },
        { title, ingredients, instructions },
        { new: true }
    );
    res.json(updatedRecette);
});


router.delete('/delete/:name', async (req, res) => {
    const { name } = req.params;
    await Recette.findOneAndDelete({ title: name });
    res.json({ message: 'Recipe deleted' });
});

module.exports = router;
