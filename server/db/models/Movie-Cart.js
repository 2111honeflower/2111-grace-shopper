const Sequelize = require('sequelize');
const db = require('../db');
const Movie = require('./models/Movie');
const Cart = require('./models/Cart');

const Movie_Cart = db.define('Movie_Cart', {
    quantity: {
        type: Sequelize.INTEGER
    },
    filmId: {
        type: Sequelize.INTEGER,
        references: {
            model: Movie,
            key: 'id',
        }
    },
    basketId: {
        type: Sequelize.INTEGER,
        references: {
            model: Cart,
            key: 'id',
        }
    },
})

module.exports = Movie_Cart;
