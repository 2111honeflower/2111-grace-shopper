const Sequelize = require('sequelize');
const db = require('../db');

const Movie_Cart = db.define('Movie_Cart', {
    quantity: {
        type: Sequelize.INTEGER,
        default: 1,
    },
    //Cara's note was to have pivot table have a snap shot of cart
    //populate upon purchase/places status change - clarification needed.

})

module.exports = Movie_Cart;
