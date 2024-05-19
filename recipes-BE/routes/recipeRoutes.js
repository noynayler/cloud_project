const express = require('express');
const { getAllRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;