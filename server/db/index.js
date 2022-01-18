//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Cart = require('./models/Cart');
const Movie = require('./models/Movie');
const Movie_Cart = require('./models/Movie-Cart')


//associations could go here!
User.hasMany(Cart);
Cart.belongsTo(User);

Movie.belongsToMany(Cart, {
  as: 'film',
  through: Movie_Cart,
  foreignKey: 'filmId'
});
Cart.belongsToMany(Movie, {
  as: 'basket',
  through: Movie_Cart,
  foreignKey: 'basketId'
});


module.exports = {
  db,
  models: {
    User,
    Cart,
    Movie,
    Movie_Cart
  },
};
