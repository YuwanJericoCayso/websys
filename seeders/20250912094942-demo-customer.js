'use strict';
const customers=require('../customer/customers')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Customers',customers);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers',null,{});
},
  };