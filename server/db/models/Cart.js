const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');

const Cart = db.define('cart', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  }
})

module.exports = Cart
