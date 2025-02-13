require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.URL_MONGOOSE;
const DB_NAME = process.env.DBNAME;


app.use(cors());
app.use(express.json());


mongoose.connect(DB_URL, { dbName: DB_NAME, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.use('/chefs', require('./Routes/Chef'));
app.use('/recette', require('./Routes/Recette'));
app.use('/restaurant', require('./Routes/Restaurant'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
