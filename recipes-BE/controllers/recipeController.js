const AWS = require('aws-sdk');
const Recipe = require('../models/Recipe');
require('dotenv').config();

const s3 = new AWS.S3();


const uploadFileToS3 = async (file) => {
  console.log('Received file for upload:', file);

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${Date.now()}_${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype
  };

  console.log('Uploading file to S3 with params:', params);

  try {
    const uploadResult = await s3.upload(params).promise();
    console.log('Upload successful. S3 URL:', uploadResult.Location);
    return uploadResult;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

exports.testS3Connection = async (req, res) => {
  console.log('Testing S3 connection...');
  try {
    const buckets = await s3.listBuckets().promise();
    console.log('S3 Buckets:', buckets);
    res.status(200).json({ message: 'Successfully connected to S3', buckets });
  } catch (error) {
    console.error('Error connecting to S3:', error);
    res.status(500).json({ message: 'Error connecting to S3', error: error.message });
  }
};

exports.uploadPhoto = async (req, res) => {
  console.log('Received request to upload photo');
  try {
    const uploadResult = await uploadFileToS3(req.file);
    res.status(200).json({ message: 'Upload successful', photoUrl: uploadResult.Location });
  } catch (error) {
    console.error('Error uploading photo to S3:', error);
    res.status(500).json({ message: 'Error uploading photo to S3', error: error.message });
  }
};

const deleteFileFromS3 = async (fileUrl) => {
  const fileName = fileUrl.split('/').pop(); // Extract file name from URL
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: fileName
  };

  try {
    await s3.deleteObject(params).promise();
    console.log(`File ${fileName} deleted successfully from S3.`);
  } catch (error) {
    console.error('Error deleting file from S3:', error);
    throw error;
  }
};

exports.getAllRecipes = async (req, res) => {
  console.log('Fetching all recipes...');
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (error) {
    console.error('Error retrieving recipes:', error);
    res.status(500).json({ message: 'Error retrieving recipes', error: error.message });
  }
};

exports.getRecipe = async (req, res) => {
  console.log(`Fetching recipe with ID: ${req.params.id}`);
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ message: 'Error fetching recipe', error: error.message });
  }
};

exports.createRecipe = async (req, res) => {
  console.log('Creating a new recipe...');
  try {
    let photoUrl = null;
    if (req.file) {
      const uploadResult = await uploadFileToS3(req.file);
      photoUrl = uploadResult.Location; // S3 URL of the uploaded photo
    }

    const recipeData = { ...req.body, photoUrl };
    const recipe = await Recipe.create(recipeData);
    res.status(201).json(recipe);
  } catch (error) {
    console.error('Error creating recipe:', error); // Log any errors during recipe creation
    res.status(400).json({ message: 'Error creating recipe', error: error.message });
  }
};

exports.updateRecipe = async (req, res) => {
  console.log(`Updating recipe with ID: ${req.params.id}`);
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
    console.error('Error updating recipe:', error);
    res.status(500).json({ message: 'Error updating recipe', error: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  console.log(`Received DELETE request for recipe ID: ${req.params.id}`);
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      console.log(`No recipe found with ID: ${req.params.id}`);
      return res.status(404).send({ message: "Recipe not found" });
    }

    if (recipe.photoUrl) {
      await deleteFileFromS3(recipe.photoUrl);
    }

    const result = await Recipe.destroy({ where: { id: req.params.id } });
    if (result > 0) {
      console.log(`Recipe with ID ${req.params.id} deleted successfully.`);
      res.status(204).send();
    } else {
      console.log(`Failed to delete recipe with ID: ${req.params.id}`);
      res.status(500).send({ message: "Failed to delete recipe" });
    }
  } catch (error) {
    console.error('Error during deletion:', error);
    res.status(500).send({ message: "Server error" });
  }
};
