import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Restaurant Management</h2>
      <p>Manage chefs, recipes, and restaurants from here.</p>
      <nav>
        <ul>
          <li>
            <Link to="/chefs">View Chefs</Link>
          </li>
          <li>
            <Link to="/add-chef">Add a Chef</Link>
          </li>
          <li>
            <Link to="/recipes">View Recipes</Link>
          </li>
          <li>
            <Link to="/restaurants">View Restaurants</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
