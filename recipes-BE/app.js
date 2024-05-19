const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/recipesBook', recipeRoutes);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
module.exports = app;