import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipesList from './containers/RecipesList';
import RecipeDetails from './containers/RecipeDetails';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Recipes Book</h1>
      <RecipesList />
    </div>
  );
}
export default App;