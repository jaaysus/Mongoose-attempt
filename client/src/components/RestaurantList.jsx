import React, { useEffect, useState } from 'react';
import { fetchRestaurants } from '../api';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const restaurantsData = await fetchRestaurants();
        setRestaurants(restaurantsData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getRestaurants();
  }, []);

  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            {restaurant.name} - {restaurant.address} - Rating: {restaurant.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
