import React from "react";
import Navbar from "./components/Navbar";
import RecipesList from "./containers/RecipesList"; // Container for listing all recipes
import RecipeDetails from "./containers/RecipeDetails"; // Container for showing recipe details
import RecipeForm from "./components/RecipeForm"; // Component for adding or editing recipes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route displays the list of recipes */}
        <Route path="/" element={<RecipesList />} />

        {/* Route for viewing detailed information about a recipe */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />

        {/* Route for adding or editing a recipe */}
        <Route path="/add-recipe" element={<RecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;