import React, { useState, useEffect } from 'react';
import {
  fetchRecettes,
  fetchRecetteNames,
  addRecette,
  updateRecette,
  deleteRecette,
} from '../api';

const Recette = () => {
  const [recettes, setRecettes] = useState([]);
  const [search, setSearch] = useState('');
  const [newRecette, setNewRecette] = useState({ title: '', ingredients: '', instructions: '' });
  const [updateData, setUpdateData] = useState({ name: '', title: '', ingredients: '', instructions: '' });

  useEffect(() => {
    loadRecettes();
  }, []);

  const loadRecettes = async () => {
    const data = await fetchRecettes();
    setRecettes(data);
  };

  const handleSearch = async () => {
    const data = await fetchRecetteNames();
    const filtered = data.filter((recette) =>
      recette.title.toLowerCase().includes(search.toLowerCase())
    );
    setRecettes(filtered);
  };

  const handleAddRecette = async () => {
    await addRecette(newRecette);
    loadRecettes();
    setNewRecette({ title: '', ingredients: '', instructions: '' });
  };

  const handleUpdateRecette = async () => {
    await updateRecette(updateData.name, {
      title: updateData.title,
      ingredients: updateData.ingredients,
      instructions: updateData.instructions,
    });
    loadRecettes();
    setUpdateData({ name: '', title: '', ingredients: '', instructions: '' });
  };

  const handleDeleteRecette = async (name) => {
    await deleteRecette(name);
    loadRecettes();
  };

  return (
    <div>
      <h1>Recettes</h1>

      {/* Search Functionality */}
      <input
        type="text"
        placeholder="Search recipes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Add New Recipe */}
      <div>
        <h2>Add Recipe</h2>
        <input
          type="text"
          placeholder="Title"
          value={newRecette.title}
          onChange={(e) => setNewRecette({ ...newRecette, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingredients"
          value={newRecette.ingredients}
          onChange={(e) => setNewRecette({ ...newRecette, ingredients: e.target.value })}
        />
        <input
          type="text"
          placeholder="Instructions"
          value={newRecette.instructions}
          onChange={(e) => setNewRecette({ ...newRecette, instructions: e.target.value })}
        />
        <button onClick={handleAddRecette}>Add</button>
      </div>

      {/* Update Existing Recipe */}
      <div>
        <h2>Update Recipe</h2>
        <input
          type="text"
          placeholder="Name of Recipe to Update"
          value={updateData.name}
          onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Title"
          value={updateData.title}
          onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Ingredients"
          value={updateData.ingredients}
          onChange={(e) => setUpdateData({ ...updateData, ingredients: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Instructions"
          value={updateData.instructions}
          onChange={(e) => setUpdateData({ ...updateData, instructions: e.target.value })}
        />
        <button onClick={handleUpdateRecette}>Update</button>
      </div>

      {/* List All Recipes */}
      <div>
        <h2>Recipe List</h2>
        <ul>
          {recettes.map((recette) => (
            <li key={recette._id}>
              {recette.title}{' '}
              <button onClick={() => handleDeleteRecette(recette.title)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recette;
