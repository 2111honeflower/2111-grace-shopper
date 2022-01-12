//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Cart = require('./models/Cart')
const Movie = require('./models/Movie')


//associations could go here!
User.hasMany(Cart)
Cart.belongsTo(User)
Cart.hasMany(Movie)
Movie.belongsToMany(Cart)

module.exports = {
  db,
  models: {
    User,
    Cart,
    Movie
  },
}
