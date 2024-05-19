import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from '../api/recipesApi';

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchRecipe(id).then(response => setRecipe(response.data))
                   .catch(error => console.error('Error fetching recipe details:', error));
  }, [id]);

  return (
    <div>
      {recipe ? (
        <div>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.directions}</p>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}
export default RecipeDetails;