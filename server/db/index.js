const db = require("./db");
const User = require("./models/User");
const Cart = require("./models/Cart");
const Movie = require("./models/Movie");
const Movie_Cart = require("./models/Movie-Cart");

//ASSOCIATIONS
User.hasMany(Cart);
Cart.belongsTo(User);

Movie.belongsToMany(Cart, { through: "Movie_Cart" });
Cart.belongsToMany(Movie, { through: "Movie_Cart" });

module.exports = {
  db,
  models: {
    User,
    Cart,
    Movie,
    Movie_Cart,
  },
};
