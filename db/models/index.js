const {User, UserSchema } = require('./user.model')
const {Customer, CustomerSchema} = require('./customer.model')
const {Category, CategorySchema } = require('./category.model')
const {Product, ProductSchema} = require('./product.model')
const {Order, OrderSchema} = require('./order.model')
const {OrderDetail, OrderDetailSchema} = require('./orderDetail.model')

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize))
    Order.init(OrderSchema, Order.config(sequelize))
    OrderDetail.init(OrderDetailSchema, OrderDetail.config(sequelize))

    User.associate(sequelize.models)
    Customer.associate(sequelize.models)
    Category.associate(sequelize.models)
    Product.associate(sequelize.models)
    Order.associate(sequelize.models)
    OrderDetail.associate(sequelize.models)
    
    
}

module.exports = setupModels;