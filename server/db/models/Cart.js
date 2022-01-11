const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');

const Cart = db.define('cart', {
  movieCount: {
    // type: Sequelize.STRING,
    // unique: true,
    // allowNull: false
  },
  totalPrice: {
    // type: Sequelize.STRING,
  },
  shippingPrice: {

  },
  address: {

  },
  status: {

  }
})

module.exports = Cart
