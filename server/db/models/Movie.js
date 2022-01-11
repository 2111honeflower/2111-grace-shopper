const Sequelize = require('sequelize');
const db = require('..db');

const Movie = db.define('movie', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://res.cloudinary.com/people-matters/image/upload/f_auto,q_auto,w_800,h_800,c_lpad/v1517845732/1517845731.jpg'
    },
    description: {
        type: Sequelize.TEXT,
        defaultValue: 'Currently Unavailable'
    },
    genre: {
        type: Sequelize.STRING,
        defaultValue: 'Unknown'
    },
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    }
})

module.export = Movie

