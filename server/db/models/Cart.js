const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  movieCount: {
    type: Sequelize.INTEGER,
  },
  totalPrice: {
    type: Sequelize.FLOAT,
  },
  shippingPrice: {
    type: Sequelize.FLOAT,
  },
  address: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING,
  }
})

module.exports = Cart
