const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('news_database', 'username', 'password', {
 host: 'localhost',
 dialect: 'mysql',
});

const News = require('./News');

module.exports = {
 sequelize,
 News,
};