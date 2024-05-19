const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving recipes', error: error.message });
    }
};

exports.getRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id);
        if (recipe) {
            res.json(recipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipe', error: error.message });
    }
};

exports.createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ message: 'Error creating recipe', error: error.message });
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const [updated] = await Recipe.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedRecipe = await Recipe.findByPk(req.params.id);
            res.json({ message: 'Recipe updated successfully', recipe: updatedRecipe });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating recipe', error: error.message });
    }
};


exports.deleteRecipe = async (req, res) =>
{
  console.log(`Received DELETE request for recipe ID: ${req.params.id}`);
  try {
    const result = await Recipe.destroy({ where: { id: req.params.id } });
    if (result > 0) {
      console.log(`Recipe with ID ${req.params.id} deleted successfully.`);
      res.status(204).send();
    } else {
      console.log(`No recipe found with ID: ${req.params.id}`);
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (error) {
    console.error('Error during deletion:', error);
    res.status(500).send({ message: "Server error" });
  }
}



