const { Sequelize } = require('sequelize');

const DB = new Sequelize({
  dialect: 'sqlite',
  storage: './src/Models/Data/Bank.sqlite',
  logging:false
});

module.exports = DB;