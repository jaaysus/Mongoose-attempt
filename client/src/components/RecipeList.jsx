import React, { useEffect, useState } from 'react';
import { fetchRecettes } from '../api';

const RecipeList = () => {
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    const getRecettes = async () => {
      try {
        const recettesData = await fetchRecettes();
        setRecettes(recettesData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getRecettes();
  }, []);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recettes.map((recette) => (
          <li key={recette._id}>
            {recette.title} - {recette.ingredients.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
