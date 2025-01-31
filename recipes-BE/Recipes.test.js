const request = require('supertest');
const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');
const Recipe = require('./models/Recipe'); // Adjust the path to your Recipe model
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();
app.use(bodyParser.json());
app.use('/recipesBook', recipeRoutes);

describe('Backend API Tests: Simulating Frontend Requests', () => {
  let createdRecipeId;

  it('should create a recipe and delete it without affecting other data', async () => {
    const newRecipe = {
      title: 'Temporary Recipe',
      ingredients: 'Temporary Ingredient1, Temporary Ingredient2',
      directions: 'Temporary Step 1, Temporary Step 2',
    };

    // Create a recipe
    const createResponse = await request(app)
      .post('/recipesBook')
      .send(newRecipe)
      .expect('Content-Type', /json/)
      .expect(201);

    const createdRecipe = createResponse.body;
    createdRecipeId = createdRecipe.id;

    // Assert creation
    expect(createdRecipe).toMatchObject({
      title: 'Temporary Recipe',
      ingredients: 'Temporary Ingredient1, Temporary Ingredient2',
      directions: 'Temporary Step 1, Temporary Step 2',
    });

    // Delete the created recipe
    const deleteResponse = await request(app)
      .delete(`/recipesBook/${createdRecipeId}`)
      .expect(204); // Expect HTTP 204 No Content

    expect(deleteResponse.status).toBe(204);

    // Verify the recipe is deleted
    const getResponse = await request(app)
      .get(`/recipesBook/${createdRecipeId}`)
      .expect(404);

    expect(getResponse.body).toMatchObject({ message: 'Recipe not found' });
  });
});
