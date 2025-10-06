'use strict';

const customers = require("../src/customer/customers")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('Customers', customers)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {})
  }
};
