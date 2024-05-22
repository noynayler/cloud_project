const { Sequelize } = require('sequelize');

// Creating a new instance of Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
});


//async function authenticateDatabase() {
//    try {
//        await sequelize.authenticate();
//        console.log('Connection has been established successfully.');
//    } catch (error) {
//        console.error('Unable to connect to the database:', error);
//    }
//}
//
//// Call the function to authenticate
//authenticateDatabase();

module.exports = sequelize;