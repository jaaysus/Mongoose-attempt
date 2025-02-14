const API_URL = '/api';

// Chefs API
export const fetchChefs = async () => {
  const response = await fetch(`${API_URL}/chefs/all`);
  if (!response.ok) {
    throw new Error('Error fetching chefs');
  }
  return response.json();
};

export const fetchChefNames = async () => {
  const response = await fetch(`${API_URL}/chefs/names`);
  if (!response.ok) {
    throw new Error('Error fetching chef names');
  }
  return response.json();
};

export const fetchChefRecettes = async () => {
  const response = await fetch(`${API_URL}/chefs/recettes`);
  if (!response.ok) {
    throw new Error('Error fetching chef recipes');
  }
  return response.json();
};

export const addChef = async (chef) => {
  const response = await fetch(`${API_URL}/chefs/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chef),
  });
  if (!response.ok) {
    throw new Error('Error adding chef');
  }
  return response.json();
};

export const updateChef = async (name, specialty) => {
  const response = await fetch(`${API_URL}/chefs/update/${name}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ specialty }),
  });
  if (!response.ok) {
    throw new Error('Error updating chef');
  }
  return response.json();
};

export const deleteChef = async (name) => {
  const response = await fetch(`${API_URL}/chefs/delete/${name}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting chef');
  }
  return response.json();
};

// Recettes API
export const fetchRecettes = async () => {
  const response = await fetch(`${API_URL}/recette/all`);
  if (!response.ok) {
    throw new Error('Error fetching recipes');
  }
  return response.json();
};

export const fetchRecetteNames = async () => {
  const response = await fetch(`${API_URL}/recette/names`);
  if (!response.ok) {
    throw new Error('Error fetching recipe names');
  }
  return response.json();
};

export const addRecette = async (recette) => {
  const response = await fetch(`${API_URL}/recette/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recette),
  });
  if (!response.ok) {
    throw new Error('Error adding recipe');
  }
  return response.json();
};

export const updateRecette = async (name, recette) => {
  const response = await fetch(`${API_URL}/recette/update/${name}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recette),
  });
  if (!response.ok) {
    throw new Error('Error updating recipe');
  }
  return response.json();
};

export const deleteRecette = async (name) => {
  const response = await fetch(`${API_URL}/recette/delete/${name}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting recipe');
  }
  return response.json();
};

// Restaurants API
export const fetchRestaurants = async () => {
  const response = await fetch(`${API_URL}/restaurant/all`);
  if (!response.ok) {
    throw new Error('Error fetching restaurants');
  }
  return response.json();
};

export const fetchChefsByRestaurant = async (restaurantName) => {
  const response = await fetch(`${API_URL}/restaurant/chefs/${restaurantName}`);///chefs/:restaurantname
  if (!response.ok) {
    throw new Error('Error fetching chefs for the restaurant');
  }
  return response.json();
};

export const fetchRecettesByRestaurant = async (restaurantName) => {
  const response = await fetch(`${API_URL}/restaurant/recettes/${restaurantName}`);
  if (!response.ok) {
    throw new Error('Error fetching recipes for the restaurant');
  }
  return response.json();
};

export const fetchRestaurantsByCategory = async (category) => {
  const response = await fetch(`${API_URL}/restaurant/listCategorie/${category}`);
  if (!response.ok) {
    throw new Error('Error fetching restaurants by category');
  }
  return response.json();
};

export const fetchRestaurantsByYearRange = async (year1, year2) => {
  const response = await fetch(`${API_URL}/restaurant/list/${year1}/${year2}`);
  if (!response.ok) {
    throw new Error('Error fetching restaurants by year range');
  }
  return response.json();
};

export const addRestaurant = async (restaurant) => {
  const response = await fetch(`${API_URL}/restaurant/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(restaurant),
  });
  if (!response.ok) {
    throw new Error('Error adding restaurant');
  }
  return response.json();
};

export const updateRestaurant = async (name, restaurant) => {
  const response = await fetch(`${API_URL}/restaurant/update/${name}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(restaurant),
  });
  if (!response.ok) {
    throw new Error('Error updating restaurant');
  }
  return response.json();
};

export const deleteRestaurant = async (name) => {
  const response = await fetch(`${API_URL}/restaurant/delete/${name}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting restaurant');
  }
  return response.json();
};
