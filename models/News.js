const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const News = sequelize.define('news', {
 id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
 },
 title: {
    type: DataTypes.STRING(255),
    allowNull: false,
 },
 author: {
    type: DataTypes.STRING(255),
    allowNull: false,
 },
 content: {
    type: DataTypes.TEXT,
    allowNull: false,
 },
 url: {
    type: DataTypes.STRING(255),
    allowNull: false,
 },
 url_image: {
    type: DataTypes.STRING(255),
 },
 published_at: {
    type: DataTypes.DATE,
    allowNull: false,
 },
 category: {
    type: DataTypes.ENUM('politics', 'sports', 'entertainment', 'technology'),
    allowNull: false,
 },
});

module.exports = News;