'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models['customer']);
      this.belongsToMany(models['products'],{
        through: models[''],
        otherKey:'orderId',
      });
    }
  }
  order.init({
    id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    totalAmount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};