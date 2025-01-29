const express = require('express');
const { testS3Connection, getAllRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

const router = express.Router();

// Middleware to log the request path
router.use((req, res, next) => {
    console.log("Request path:", req.path);
    next();
});

router.get('/test-s3', testS3Connection); // Test S3 connection
router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;
