import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { deleteRecipe } from '../api/recipesApi';
import styles from '../styles/RecipeCard.module.css';

const RecipeCard = memo(({ recipe, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

const handleDelete = async (e) => {
  e.stopPropagation();
  if (isDeleting) {
    console.log('Delete already in progress for ID:', recipe.id);
    return; // Prevent duplicate calls
  }

  console.log('Delete button clicked for recipe ID:', recipe.id);
  setIsDeleting(true);

  try {
    await deleteRecipe(recipe.id);
    console.log(`Recipe with ID ${recipe.id} deleted successfully.`);
    onDelete(recipe.id); // Notify parent to update state
  } catch (error) {
    console.error('Error deleting recipe:', error);
  } finally {
    setIsDeleting(false); // Re-enable button
  }
};

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{recipe.title}</h3>
      {recipe.photoUrl && (
        <img src={recipe.photoUrl} alt={recipe.title} className={styles.photo} />
      )}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent bubbling
          handleDelete(e);
        }}
        className={styles.deleteButton}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
      <div className={styles.recipeDetails}>
        <p className={styles.ingredients}>{recipe.ingredients}</p>
        <p className={styles.directions}>{recipe.directions}</p>
      </div>
    </div>
  );
});

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    directions: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RecipeCard;
