const request = require('supertest');

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001/recipesBook';

describe('Backend API Tests: Create and Delete Recipe', () => {
  let createdRecipeId;

  it('✅ Should create a new recipe', async () => {
    const newRecipe = {
      title: 'Test Recipe',
      ingredients: 'Ingredient1, Ingredient2',
      directions: 'Step 1, Step 2'
    };

    const response = await request(BACKEND_URL)
      .post('/')
      .send(newRecipe)
      .expect(201);

    createdRecipeId = response.body.id;
    expect(response.body.title).toBe(newRecipe.title);
    console.log(`✅ Created recipe ID: ${createdRecipeId}`);
  });

  it('✅ Should fetch the created recipe', async () => {
    const response = await request(BACKEND_URL)
      .get(`/${createdRecipeId}`)
      .expect(200);

    expect(response.body.id).toBe(createdRecipeId);
    expect(response.body.title).toBe('Test Recipe');
  });

  it('✅ Should delete the created recipe', async () => {
    const response = await request(BACKEND_URL)
      .delete(`/${createdRecipeId}`)
      .expect(204);

    expect(response.status).toBe(204);
    console.log(`✅ Deleted recipe ID: ${createdRecipeId}`);
  });

  it('✅ Should return 404 when fetching deleted recipe', async () => {
    const response = await request(BACKEND_URL)
      .get(`/${createdRecipeId}`)
      .expect(404);

    expect(response.body).toMatchObject({ message: 'Recipe not found' });
  });
});
