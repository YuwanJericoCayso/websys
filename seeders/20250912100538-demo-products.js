'use strict';
const products=require('../products/products')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products',products);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products',null,{});
},
};
