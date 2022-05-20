const { Model, DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE} = require('./order.model')
const { PRODUCT_TABLE} = require('./product.model')

const ORDER_DETAIL_TABLE = 'orderDetail';

const OrderDetailSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
        model: ORDER_TABLE,
        key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
        model: PRODUCT_TABLE,
        key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',

  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'amount'

  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
}

class OrderDetail extends Model {

  static associate() {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_DETAIL_TABLE,
      modelName: 'OrderDetail',
      timestamps: false
    }
  }
}

module.exports = { OrderDetail, OrderDetailSchema, ORDER_DETAIL_TABLE };