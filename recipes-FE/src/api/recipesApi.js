import axios from 'axios';

const apiEndpoint = 'http://localhost:3000/recipesBook';

export const fetchRecipes = () => axios.get(apiEndpoint);
export const fetchRecipe = id => axios.get(`${apiEndpoint}/${id}`);
export const createRecipe = recipe => axios.post(apiEndpoint, recipe);
export const updateRecipe = (id, recipe) => axios.put(`${apiEndpoint}/${id}`, recipe);
export const deleteRecipe = id => axios.delete(`${apiEndpoint}/${id}`);