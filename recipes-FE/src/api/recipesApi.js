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

// Fetch the API endpoint once and then make requests
const initializeApi = async () => {
  await fetchApiEndpoint();
};

// Call initializeApi to fetch the API endpoint URL
const apiPromise = initializeApi();

export const fetchRecipes = async () => {
  await apiPromise;
  return axios.get(apiEndpoint);
};

export const fetchRecipe = async (id) => {
  await apiPromise;
  return axios.get(`${apiEndpoint}/${id}`);
};

export const createRecipe = async (recipe) => {
  await apiPromise;
  return axios.post(apiEndpoint, recipe);
};

export const updateRecipe = async (id, recipe) => {
  await apiPromise;
  return axios.put(`${apiEndpoint}/${id}`, recipe);
};

export const deleteRecipe = async (id) => {
  await apiPromise;
  return axios.delete(`${apiEndpoint}/${id}`);
};