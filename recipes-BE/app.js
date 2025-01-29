const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const recipeRoutes = require('./routes/recipeRoutes');
require('dotenv').config();

const app = express();

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Multer storage configuration (in memory for further processing)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Apply multer middleware to the route that handles photo uploads
app.use('/recipesBook', (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
        upload.single('photo')(req, res, next);
    } else {
        next();
    }
}, recipeRoutes);

module.exports = app;