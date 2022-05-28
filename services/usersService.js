const boom = require('@hapi/boom');
const  bycrypt = require('bcrypt')
const {models} = require('../libs/sequelize')

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bycrypt.hash(data.password, 10)
    const newUser = await models.User.create({
      ...data,
      password: hash
    })
    delete newUser.dataValues.password
    return newUser;
  }

  async find() {    
    const rta = await models.User.findAll({
      include: ['customer']
    })
    return rta;
  }

  async findByEmail(email) {    
    const rta = await models.User.findOne({
      where: {email}
    })
    return rta;
  }


  async findOne(id) {
    const rta = await models.User.findByPk(id)
    if(!rta) throw boom.notFound('User not found');
    return rta
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes);
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id }
  }
}

module.exports = UserService;