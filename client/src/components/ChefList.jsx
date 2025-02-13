import React, { useEffect, useState } from 'react';
import { fetchChefs } from '../api';

const ChefList = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const getChefs = async () => {
      try {
        const chefsData = await fetchChefs();
        setChefs(chefsData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getChefs();
  }, []);

  return (
    <div>
      <h2>Chefs List</h2>
      <ul>
        {chefs.map((chef) => (
          <li key={chef._id}>
            {chef.name} - {chef.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChefList;
