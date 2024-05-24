import axios from 'axios';

let apiEndpoint;

if (window.location.hostname.includes('amazonaws.com')) {
  apiEndpoint = `${window.location.href}/recipesBook`;
} else {
  apiEndpoint = 'http://localhost:3001/recipesBook';
}
export const fetchRecipes = () => axios.get(apiEndpoint);
export const fetchRecipe = id => axios.get(`${apiEndpoint}/${id}`);
export const createRecipe = recipe => axios.post(apiEndpoint, recipe);
export const updateRecipe = (id, recipe) => axios.put(`${apiEndpoint}/${id}`, recipe);
export const deleteRecipe = id => axios.delete(`${apiEndpoint}/${id}`);

// Function to fetch API endpoint URL if not already fetched
//const fetchApiEndpoint = async () => {
//  if (!apiEndpoint) {
//    try {
//      // Make a request to fetch the API endpoint URL
//      const response = await axios.get('/api/backend-url'); // Assuming the backend exposes this endpoint
//      apiEndpoint = `${response.data.url}/recipesBook`;
//      console.log('API Endpoint fetched:', apiEndpoint); // Debugging log
//    } catch (error) {
//      // If there is an error fetching the DNS, assume localhost
//      apiEndpoint = 'http://localhost:3001/recipesBook';
//      console.error('Error fetching API endpoint URL. Falling back to localhost:', error);
//    }
//  }
//  return apiEndpoint;
//};
//
//// Fetch the API endpoint once and then make requests
//const initializeApi = async () => {
//  await fetchApiEndpoint();
//};
//
//// Call initializeApi to fetch the API endpoint URL
//const apiPromise = initializeApi();
//
//export const fetchRecipes = async () => {
//  await apiPromise;
//  console.log('API Endpoint used:', apiEndpoint); // Debugging log
//  return axios.get(apiEndpoint);
//};
//
//export const fetchRecipe = async (id) => {
//  await apiPromise;
//  return axios.get(`${apiEndpoint}/${id}`);
//};
//
//export const createRecipe = async (recipe) => {
//  await apiPromise;
//  return axios.post(apiEndpoint, recipe);
//};
//
//export const updateRecipe = async (id, recipe) => {
//  await apiPromise;
//  return axios.put(`${apiEndpoint}/${id}`, recipe);
//};
//
//export const deleteRecipe = async (id) => {
//  await apiPromise;
//  return axios.delete(`${apiEndpoint}/${id}`);
//};
