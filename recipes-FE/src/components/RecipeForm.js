import React, { useState } from 'react';
import styles from '../styles/RecipeForm.module.css';

function RecipeForm({ onSubmit }) {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', directions: '', photo: null });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (event) => {
    const photoFile = event.target.files[0];
    setRecipe(prev => ({
      ...prev,
      photo: photoFile
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(recipe);
    setRecipe({ title: '', ingredients: '', directions: '', photo: null }); // Reset form after submission
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            name="title"
            className={styles.input}
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Ingredients</label>
          <textarea
            name="ingredients"
            className={styles.textarea}
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Directions</label>
          <textarea
            name="directions"
            className={styles.textarea}
            value={recipe.directions}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handlePhotoChange}
            accept="image/*"
            className={styles.fileInput}
          />
        </div>
        <button type="submit" className={styles.button}>Save Recipe</button>
      </form>
    </div>
  );
}
export default RecipeForm;
