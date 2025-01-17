import axios from 'axios';

let apiEndpoint;

if (window.location.hostname.includes('amazonaws.com')) {
  apiEndpoint = `${window.location.href}recipesBook/`;
} else {
  apiEndpoint = 'http://localhost:3001/recipesBook';
}
export const fetchRecipes = () => axios.get(apiEndpoint);
export const fetchRecipe = id => axios.get(`${apiEndpoint}/${id}`);
export const createRecipe = recipe => axios.post(apiEndpoint, recipe);
export const updateRecipe = (id, recipe) => axios.put(`${apiEndpoint}/${id}`, recipe);
export const deleteRecipe = id => axios.delete(`${apiEndpoint}/${id}`);
