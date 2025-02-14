import React, { useState, useEffect } from 'react';
import {
  fetchChefs,
  fetchChefNames,
  fetchChefRecettes,
  addChef,
  updateChef,
  deleteChef,
} from '../api';

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  const [search, setSearch] = useState('');
  const [newChef, setNewChef] = useState({ name: '', specialty: '' });
  const [updateData, setUpdateData] = useState({ name: '', specialty: '' });

  useEffect(() => {
    loadChefs();
  }, []);

  const loadChefs = async () => {
    const data = await fetchChefs();
    setChefs(data);
  };

  const handleSearch = async () => {
    const data = await fetchChefNames();
    const filtered = data.filter((chef) =>
      chef.name.toLowerCase().includes(search.toLowerCase())
    );
    setChefs(filtered);
  };

  const handleAddChef = async () => {
    await addChef(newChef);
    loadChefs();
    setNewChef({ name: '', specialty: '' });
  };

  const handleUpdateChef = async () => {
    await updateChef(updateData.name, updateData.specialty);
    loadChefs();
    setUpdateData({ name: '', specialty: '' });
  };

  const handleDeleteChef = async (name) => {
    await deleteChef(name);
    loadChefs();
  };

  const handleFetchChefRecettes = async () => {
    const data = await fetchChefRecettes();
    console.log('Chefs with recipe counts:', data); // Example usage
  };

  return (
    <div>
      <h1>Chefs</h1>

      {/* Search Functionality */}
      <input
        type="text"
        placeholder="Search chefs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Add New Chef */}
      <div>
        <h2>Add Chef</h2>
        <input
          type="text"
          placeholder="Name"
          value={newChef.name}
          onChange={(e) => setNewChef({ ...newChef, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Specialty"
          value={newChef.specialty}
          onChange={(e) => setNewChef({ ...newChef, specialty: e.target.value })}
        />
        <button onClick={handleAddChef}>Add</button>
      </div>

      {/* Update Existing Chef */}
      <div>
        <h2>Update Chef</h2>
        <input
          type="text"
          placeholder="Name of Chef to Update"
          value={updateData.name}
          onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Specialty"
          value={updateData.specialty}
          onChange={(e) =>
            setUpdateData({ ...updateData, specialty: e.target.value })
          }
        />
        <button onClick={handleUpdateChef}>Update</button>
      </div>

      {/* List All Chefs */}
      <div>
        <h2>Chef List</h2>
        <ul>
          {chefs.map((chef) => (
            <li key={chef._id}>
              {chef.name} ({chef.specialty}){' '}
              <button onClick={() => handleDeleteChef(chef.name)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Fetch Chef Recettes */}
      <button onClick={handleFetchChefRecettes}>
        Show Chefs with Recipe Counts (Console)
      </button>
    </div>
  );
};

export default Chef;
