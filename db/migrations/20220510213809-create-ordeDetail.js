'use strict';
const { OrderDetailSchema, ORDER_DETAIL_TABLE} = require('./../models/orderDetail.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_DETAIL_TABLE, OrderDetailSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_DETAIL_TABLE)
  }
};
