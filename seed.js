const mongoose = require('mongoose');


const Chef = require('./Models/ChefModel');
const Recette = require('./Models/RecetteModel');
const Restaurant = require('./Models/RestaurantModel');


mongoose.connect('mongodb://localhost:27017/mongoosetrial')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); 
  });


const chefs = [
  { name: 'Ahmed Al-Farsi', specialty: 'Grilled Meat' },
  { name: 'Layla Al-Mansouri', specialty: 'Pastries' },
  { name: 'Omar Al-Harbi', specialty: 'Seafood' },
  { name: 'Fatima Al-Jabari', specialty: 'Traditional Arabic Cuisine' },
  { name: 'Rami Al-Qassimi', specialty: 'Vegetarian Dishes' },
  { name: 'Sara Al-Hashimi', specialty: 'Sweets and Desserts' },
  { name: 'Hassan Al-Mutawa', specialty: 'Barbecue' },
  { name: 'Zainab Al-Badawi', specialty: 'Mediterranean Cuisine' },
  { name: 'Ali Al-Mahmoud', specialty: 'Fried Dishes' },
  { name: 'Mona Al-Hashimi', specialty: 'Grilled Fish' }
];

Chef.insertMany(chefs)
  .then(() => console.log('Chefs added successfully'))
  .catch((err) => console.error('Error adding chefs:', err));


  const recettes = [
    {
      title: 'Chicken Shawarma',
      ingredients: ['Chicken', 'Yogurt', 'Garlic', 'Spices', 'Lemon'],
      instructions: 'Marinate chicken in spices and yogurt. Grill until cooked.'
    },
    {
      title: 'Fattoush Salad',
      ingredients: ['Lettuce', 'Cucumber', 'Tomato', 'Pita Bread', 'Olive Oil'],
      instructions: 'Mix vegetables with toasted pita and season with olive oil.'
    },
    {
      title: 'Kebab',
      ingredients: ['Lamb', 'Onions', 'Spices', 'Yogurt'],
      instructions: 'Grill marinated lamb with onions and spices.'
    },
    {
      title: 'Hummus',
      ingredients: ['Chickpeas', 'Tahini', 'Garlic', 'Olive Oil'],
      instructions: 'Blend chickpeas, tahini, garlic, and olive oil to make hummus.'
    },
    {
      title: 'Baba Ganoush',
      ingredients: ['Eggplant', 'Tahini', 'Garlic', 'Lemon'],
      instructions: 'Grill eggplant, then blend with tahini, garlic, and lemon juice.'
    },
    {
      title: 'Tabbouleh',
      ingredients: ['Parsley', 'Tomato', 'Onion', 'Bulgur', 'Olive Oil'],
      instructions: 'Mix ingredients and season with olive oil and lemon juice.'
    },
    {
      title: 'Moussaka',
      ingredients: ['Eggplant', 'Ground Beef', 'Tomato Sauce', 'Cheese'],
      instructions: 'Layer eggplant and beef in a dish, then bake with cheese.'
    },
    {
      title: 'Kunafa',
      ingredients: ['Phyllo Dough', 'Cheese', 'Sugar Syrup'],
      instructions: 'Layer cheese between phyllo dough, bake, and pour sugar syrup.'
    },
    {
      title: 'Falafel',
      ingredients: ['Chickpeas', 'Onions', 'Garlic', 'Coriander', 'Cumin'],
      instructions: 'Blend ingredients, form into balls, and deep fry.'
    },
    {
      title: 'Stuffed Grape Leaves',
      ingredients: ['Grape Leaves', 'Rice', 'Tomato', 'Lemon'],
      instructions: 'Stuff grape leaves with rice and season with tomato and lemon.'
    }
  ];
  

Recette.insertMany(recettes)
  .then(() => console.log('Recettes added successfully'))
  .catch((err) => console.error('Error adding recettes:', err));


const restaurants = [
  { name: 'Al-Basha', address: '123 Main St, Dubai', rating: 4.5 },
  { name: 'Levantine Bistro', address: '456 Palm Ave, Beirut', rating: 4.0 },
  { name: 'Seafood Haven', address: '789 Marina Blvd, Jeddah', rating: 4.7 },
  { name: 'Sultan’s Grill', address: '101 King Rd, Cairo', rating: 3.9 },
  { name: 'Arabesque', address: '202 Oasis St, Riyadh', rating: 4.2 },
  { name: 'Desert Rose', address: '303 Souk St, Abu Dhabi', rating: 4.6 },
  { name: 'Al-Waha', address: '404 Al-Madina St, Amman', rating: 3.8 },
  { name: 'Golden Oasis', address: '505 Desert Road, Doha', rating: 4.4 },
  { name: 'Spice Bazaar', address: '606 Spice St, Marrakech', rating: 4.1 },
  { name: 'Nile View', address: '707 Nile St, Cairo', rating: 4.3 }
];

Restaurant.insertMany(restaurants)
  .then(() => console.log('Restaurants added successfully'))
  .catch((err) => console.error('Error adding restaurants:', err));
