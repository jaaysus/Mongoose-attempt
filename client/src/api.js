const API_URL = '/api';


export const fetchChefs = async () => {
  const response = await fetch(`${API_URL}/chefs/all`);
  if (!response.ok) {
    throw new Error('Error fetching chefs');
  }
  return response.json();
};


export const addChef = async (chefData) => {
  const response = await fetch(`${API_URL}/chefs/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(chefData),
  });
  if (!response.ok) {
    throw new Error('Error adding chef');
  }
  return response.json();
};


export const fetchRecettes = async () => {
  const response = await fetch(`${API_URL}/recette/all`);
  if (!response.ok) {
    throw new Error('Error fetching recipes');
  }
  return response.json();
};


export const fetchRestaurants = async () => {
  const response = await fetch(`${API_URL}/restaurant/all`);
  if (!response.ok) {
    throw new Error('Error fetching restaurants');
  }
  return response.json();
};
