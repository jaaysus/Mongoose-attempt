import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chef from './components/chef';
import Recette from './components/Recette';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <Router>
      <div>
        <h1>Restaurant Management</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chefs" element={<Chef />} />
          <Route path="/recipes" element={<Recette />} />
          <Route path="/restaurants" element={<Restaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
