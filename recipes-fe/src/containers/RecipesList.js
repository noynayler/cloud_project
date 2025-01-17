import React, { useEffect, useState, useCallback } from 'react';
import { fetchRecipes, createRecipe, deleteRecipe } from '../api/recipesApi';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';
import styles from '../styles/RecipeList.module.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingRecipe, setAddingRecipe] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      const response = await fetchRecipes();
      setRecipes(response.data);
      setError(null); // Clear errors if successful
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Failed to fetch recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddNewRecipe = () => {
    setAddingRecipe(true);
  };

  const handleRecipeSubmit = async (newRecipe) => {
    try {
      await createRecipe(newRecipe);
      setAddingRecipe(false);
      loadRecipes();
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

    // Delete a recipe
    const handleRecipeDelete = useCallback((recipeId) => {
      console.log('Deleting recipe with ID:', recipeId);

      if (!recipeId) {
        console.error('Error: Recipe ID is undefined or invalid:', recipeId);
        return;
      }

      // Optimistically update state
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== recipeId));

      // API call to delete the recipe
      deleteRecipe(recipeId).catch((error) => {
        console.error('Error deleting recipe:', error);
        loadRecipes(); // Revert state if deletion fails
      });
    }, []);

  const handleCardClick = (id) => {
    setSelectedRecipeId(selectedRecipeId === id ? null : id);
  };

  if (loading) return <p>Loading recipes...</p>;

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}

      {addingRecipe ? (
        <RecipeForm onSubmit={handleRecipeSubmit} />
      ) : (
        <div
          onClick={handleAddNewRecipe}
          className={styles.addNewCard}
          role="button"
          tabIndex={0}
          aria-label="Add New Recipe"
        >
          <p>Add New Recipe</p>
        </div>
      )}

      {recipes.length === 0 ? (
        <p className={styles.noRecipes}>No recipes found. Add a new recipe!</p>
      ) : (
        <div className={styles.recipeGrid}>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onDelete={(id) => handleRecipeDelete(id)}
              onCardClick={handleCardClick}
              isSelected={selectedRecipeId === recipe.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeList;