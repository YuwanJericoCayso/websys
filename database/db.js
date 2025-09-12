const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('../customer/customers');

module.exports = sequelize;