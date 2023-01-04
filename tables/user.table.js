const DataTypes  = require('sequelize');
const dede = require('../module');

const meraTable = dede.define('rocky',{
  username:DataTypes.STRING,
  email:DataTypes.STRING,
});

module.exports = meraTable;