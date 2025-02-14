import React, { useState, useEffect } from 'react';
import {
  fetchRestaurants,
  fetchChefsByRestaurant,
  fetchRecettesByRestaurant,
  fetchRestaurantsByCategory,
  fetchRestaurantsByYearRange,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from '../api';

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchYears, setSearchYears] = useState({ start: '', end: '' });
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    address: '',
    rating: '',
    category: '',
    yearOpened: '',
  });
  const [updateData, setUpdateData] = useState({
    name: '',
    address: '',
    rating: '',
    category: '',
    yearOpened: '',
  });

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    const data = await fetchRestaurants();
    setRestaurants(data);
  };

  const handleSearchCategory = async () => {
    const data = await fetchRestaurantsByCategory(searchCategory);
    setRestaurants(data);
  };

  const handleSearchYears = async () => {
    const data = await fetchRestaurantsByYearRange(searchYears.start, searchYears.end);
    setRestaurants(data);
  };

  const handleAddRestaurant = async () => {
    await addRestaurant(newRestaurant);
    loadRestaurants();
    setNewRestaurant({
      name: '',
      address: '',
      rating: '',
      category: '',
      yearOpened: '',
    });
  };

  const handleUpdateRestaurant = async () => {
    await updateRestaurant(updateData.name, {
      address: updateData.address,
      rating: updateData.rating,
      category: updateData.category,
      yearOpened: updateData.yearOpened,
    });
    loadRestaurants();
    setUpdateData({
      name: '',
      address: '',
      rating: '',
      category: '',
      yearOpened: '',
    });
  };

  const handleDeleteRestaurant = async (name) => {
    await deleteRestaurant(name);
    loadRestaurants();
  };

  const handleFetchChefs = async (restaurantName) => {
    const chefs = await fetchChefsByRestaurant(restaurantName);
    console.log(`Chefs in ${restaurantName}:`, chefs); // Example usage
  };

  const handleFetchRecettes = async (restaurantName) => {
    const recettes = await fetchRecettesByRestaurant(restaurantName);
    console.log(`Recipes in ${restaurantName}:`, recettes); // Example usage
  };

  return (
    <div>
      <h1>Restaurants</h1>

      {/* Search by Category */}
      <div>
        <h2>Search by Category</h2>
        <input
          type="text"
          placeholder="Enter category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <button onClick={handleSearchCategory}>Search</button>
      </div>

      {/* Search by Year Range */}
      <div>
        <h2>Search by Year Range</h2>
        <input
          type="number"
          placeholder="Start Year"
          value={searchYears.start}
          onChange={(e) => setSearchYears({ ...searchYears, start: e.target.value })}
        />
        <input
          type="number"
          placeholder="End Year"
          value={searchYears.end}
          onChange={(e) => setSearchYears({ ...searchYears, end: e.target.value })}
        />
        <button onClick={handleSearchYears}>Search</button>
      </div>

      {/* Add New Restaurant */}
      <div>
        <h2>Add Restaurant</h2>
        <input
          type="text"
          placeholder="Name"
          value={newRestaurant.name}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newRestaurant.address}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rating"
          value={newRestaurant.rating}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newRestaurant.category}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year Opened"
          value={newRestaurant.yearOpened}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, yearOpened: e.target.value })}
        />
        <button onClick={handleAddRestaurant}>Add</button>
      </div>

      {/* Update Existing Restaurant */}
      <div>
        <h2>Update Restaurant</h2>
        <input
          type="text"
          placeholder="Name of Restaurant to Update"
          value={updateData.name}
          onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Address"
          value={updateData.address}
          onChange={(e) => setUpdateData({ ...updateData, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Rating"
          value={updateData.rating}
          onChange={(e) => setUpdateData({ ...updateData, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Category"
          value={updateData.category}
          onChange={(e) => setUpdateData({ ...updateData, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="New Year Opened"
          value={updateData.yearOpened}
          onChange={(e) => setUpdateData({ ...updateData, yearOpened: e.target.value })}
        />
        <button onClick={handleUpdateRestaurant}>Update</button>
      </div>

      {/* List All Restaurants */}
      <div>
        <h2>Restaurant List</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant._id}>
              {restaurant.name} ({restaurant.address}){' '}
              <button onClick={() => handleDeleteRestaurant(restaurant.name)}>Delete</button>
              <button onClick={() => handleFetchChefs(restaurant.name)}>Show Chefs</button>
              <button onClick={() => handleFetchRecettes(restaurant.name)}>Show Recipes</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
