//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Cart = require('./models/Cart');
const Movie = require('./models/Movie');


//associations could go here!
User.hasMany(Cart);
Cart.belongsTo(User);

Movie.belongsToMany(Cart, {through: 'Movie_Cart'});
Cart.hasMany(Movie);


module.exports = {
  db,
  models: {
    User,
    Cart,
    Movie,
  },
};
