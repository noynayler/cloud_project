const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Recipe = sequelize.define('Recipe', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically increment the ID for new entries
    },
    title: {
        type: DataTypes.TEXT, // VARCHAR is mapped to STRING in Sequelize
        allowNull: false
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    directions: {
        type: DataTypes.TEXT,
        allowNull: false
    },
      photoUrl: {
        type: DataTypes.STRING,
        allowNull: true // Allow null if no photo is uploaded
      }
}, {
    tableName: 'recipes',
    timestamps: false
});

module.exports = Recipe;
