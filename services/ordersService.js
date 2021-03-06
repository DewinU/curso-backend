const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class OrderService {

  constructor(){
  }
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data){
    const newOrderItem = await models.OrderDetail.create(data);
    return newOrderItem;
  }

  async find() {
    const orders = await models.Order.findAll()
    return orders
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id,{
      include : ['customer','items']
    })
    if(!order){
      throw boom.notFound('order not found');
    }
    return order
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;