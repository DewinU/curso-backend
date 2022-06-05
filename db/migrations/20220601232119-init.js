'use strict';
const { USER_TABLE,UserSchema } = require('./../models/user.model');
const { CUSTOMER_TABLE,CustomerSchema } = require('./../models/customer.model');
const { CATEGORY_TABLE,CategorySchema } = require('./../models/category.model');
const { PRODUCT_TABLE,ProductSchema } = require('./../models/product.model');
const { ORDER_TABLE,OrderSchema } = require('./../models/order.model');
const { ORDER_DETAIL_TABLE,OrderDetailSchema } = require('./../models/orderDetail.model');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_TABLE, {id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
    customerId: {
      field: 'customer_id',
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: CUSTOMER_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW,
    }});
    await queryInterface.createTable(ORDER_DETAIL_TABLE,OrderDetailSchema );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_DETAIL_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable('SequelizeMeta');
  }
};