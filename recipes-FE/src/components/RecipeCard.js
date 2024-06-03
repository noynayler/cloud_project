import React from 'react';
import { deleteRecipe } from '../api/recipesApi';
import styles from '../styles/RecipeCard.module.css';

function RecipeCard({ recipe, onDelete }) {
  const handleDelete = () => {
    deleteRecipe(recipe.id).then(() => {
      onDelete();
    });
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{recipe.title}</h3>
      <p className={styles.ingredients}>{recipe.ingredients}</p>
      <p className={styles.directions}>{recipe.directions}</p>
      {recipe.photoUrl && (
        <img src={recipe.photoUrl} alt={recipe.title} className={styles.photo} />
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default RecipeCard;