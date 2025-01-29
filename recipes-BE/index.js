require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/dbConfig');

const PORT = process.env.PORT || 3001;


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });