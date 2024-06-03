import React, { useEffect, useState } from 'react';
import { fetchRecipes, createRecipe, deleteRecipe } from '../api/recipesApi';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';
import styles from '../styles/RecipeList.module.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingRecipe, setAddingRecipe] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

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
    setAddingRecipe(true);
  };

  const handleRecipeSubmit = (newRecipe) => {
    createRecipe(newRecipe).then(() => {
      setAddingRecipe(false);
      loadRecipes();
    });
  };

  const handleRecipeDelete = async (recipeId) => {
    try {
      await deleteRecipe(recipeId);
      loadRecipes();
    } catch (error) {
      console.error('Error deleting recipe:', error);
      loadRecipes();
    }
  };

  const handleCardClick = (id) => {
    setSelectedRecipeId(selectedRecipeId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      {addingRecipe ? (
        <RecipeForm onSubmit={handleRecipeSubmit} />
      ) : (
        <div onClick={handleAddNewRecipe} className={styles.addNewCard}>
          <p>Add New Recipe</p>
        </div>
      )}

      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <div className={styles.recipeGrid}>
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onDelete={handleRecipeDelete}
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
