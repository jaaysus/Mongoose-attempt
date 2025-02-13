import React, { useState } from 'react';
import { addChef } from '../api';

const AddChefForm = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newChef = { name, specialty };

    try {
      await addChef(newChef);
      setName('');
      setSpecialty('');
      alert('Chef added successfully!');
    } catch (error) {
      console.error(error.message);
      alert('Failed to add chef');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Chef</h3>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Specialty:
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Chef</button>
    </form>
  );
};

export default AddChefForm;
