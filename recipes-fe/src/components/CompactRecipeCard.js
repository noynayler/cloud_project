import React from 'react';
import styles from '../styles/RecipeCard.module.css';

function CompactRecipeCard({ recipe, onCardClick, onDelete }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(recipe.id);
  };

  return (
    <div className={styles.card} onClick={() => onCardClick(recipe.id)}>
      <h3 className={styles.title}>{recipe.title}</h3>
      {recipe.photoUrl && (
        <img src={recipe.photoUrl} alt={recipe.title} className={styles.photo} />
      )}
      <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
    </div>
  );
}

export default CompactRecipeCard;