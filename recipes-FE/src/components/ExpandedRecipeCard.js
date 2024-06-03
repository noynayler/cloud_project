import React from 'react';
import styles from '../styles/RecipeCard.module.css';

function ExpandedRecipeCard({ recipe, onDelete }) {
  const handleDelete = () => {
    onDelete(recipe.id);
  };

  return (
    <div className={styles.expandedCard}>
      <h3 className={styles.title}>{recipe.title}</h3>
      <p className={styles.ingredients}>{recipe.ingredients}</p>
      <p className={styles.directions}>{recipe.directions}</p>
      {recipe.photoUrl && (
        <img src={recipe.photoUrl} alt={recipe.title} className={styles.photo} />
      )}
      <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
    </div>
  );
}

export default ExpandedRecipeCard;
