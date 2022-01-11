const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  movieCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  shippingPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 5.99,
  },
  address: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Open',
    isIn: [['Open', 'Placed']],
  }
})

module.exports = Cart
