import React, { useEffect, useState } from 'react';
import { createRecipe, fetchRecipes, updateRecipe, deleteRecipe } from '../api/recipesApi';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';
import styles from '../styles/RecipeForm.module.css';

function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingRecipe, setAddingRecipe] = useState(false); // For toggling the add form

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      const response = await fetchRecipes();
      setRecipes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
    }
  };

  const handleAddNewRecipe = () => {
    setAddingRecipe(true); // Toggle add recipe form
  };

  const handleRecipeSubmit = (newRecipe) => {
    createRecipe(newRecipe).then(() => {
      setAddingRecipe(false);
      loadRecipes(); // Refresh the list after adding
    });
  };

const handleRecipeDelete = async (recipeId) => {
  try {
    const response = await deleteRecipe(recipeId);
   loadRecipes();
  } catch (error) {
    console.error('Error deleting recipe:', error);
    loadRecipes();  // Use as a fallback to ensure sync with the server
  }
};


  return (
    <div>
      {addingRecipe ? (
        <RecipeForm onSubmit={handleRecipeSubmit} />
      ) : (
        <div onClick={handleAddNewRecipe} className={styles.addNewCard}>
          <p>Add New Recipe</p>
        </div>
      )}

      {loading ? <p>Loading recipes...</p> : recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} onDelete={() => handleRecipeDelete(recipe.id)} />
      ))}
    </div>
  );
}

export default RecipesList;
