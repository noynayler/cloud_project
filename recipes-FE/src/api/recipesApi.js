import axios from 'axios';

let apiEndpoint = ''; // Variable to store the API endpoint URL

// Function to fetch API endpoint URL if not already fetched
const fetchApiEndpoint = async () => {
  if (!apiEndpoint) {
    try {
      // Make a request to fetch the API endpoint URL
      const response = await axios.get('/api/backend-url'); // Assuming the backend exposes this endpoint
      // Assuming the response contains the URL
      apiEndpoint = `${response.data.url}/recipesBook`;
    } catch (error) {
      // If there is an error fetching the DNS, assume localhost
      apiEndpoint = 'http://localhost:3001/recipesBook';
      console.error('Error fetching API endpoint URL. Falling back to localhost:', error);
    }
  }
  return apiEndpoint;
};

// Fetch the API endpoint once
fetchApiEndpoint();


export const fetchRecipes = () => axios.get(apiEndpoint);
export const fetchRecipe = id => axios.get(`${apiEndpoint}/${id}`);
export const createRecipe = recipe => axios.post(apiEndpoint, recipe);
export const updateRecipe = (id, recipe) => axios.put(`${apiEndpoint}/${id}`, recipe);
export const deleteRecipe = id => axios.delete(`${apiEndpoint}/${id}`);