'use strict';
const orders=require('../order/orders')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders',orders);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders',null,{});
},
};
