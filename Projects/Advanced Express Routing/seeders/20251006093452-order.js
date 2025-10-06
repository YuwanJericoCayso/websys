'use strict';

const order = require("../src/order/orders")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('Orders', order)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {})
  }
};


// const { faker } = require('@faker-js/faker')
// const customers = require("../src/customers/customers")

// // Check if this works
// customers.foreignKey = faker.number.int(30)

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   up: (queryInterface, Sequelize) =>{
//     return queryInterface.bulkInsert('Customers', customers)
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Customers', null, {})
//   }
// };