import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChefList from './components/ChefList';
import AddChefForm from './components/AddChefForm';
import RecipeList from './components/RecipeList';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <Router>
      <div>
        <h1>Restaurant Management</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-chef" element={<AddChefForm />} />
          <Route path="/chefs" element={<ChefList />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/restaurants" element={<RestaurantList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
