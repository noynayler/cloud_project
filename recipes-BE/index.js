require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/dbConfig');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Error starting the server:', err);
});