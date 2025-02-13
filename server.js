require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


const DB_URL = process.env.URL_MONGOOSE;
const DB_NAME = process.env.DBNAME;

if (!DB_URL || !DB_NAME) {
  console.error("Missing required environment variables: URL_MONGOOSE or DBNAME");
  process.exit(1); 
}

app.use(cors());
app.use(express.json());


mongoose.connect(DB_URL, { dbName: DB_NAME })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); 
  });


app.use('/api/chefs', require('./Routes/Chef'));
app.use('/api/recette', require('./Routes/Recette'));
app.use('/api/restaurant', require('./Routes/Restaurant'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
