const express = require('express');
const faker = require('phaker');
const app = express();
const { db } = require('../server/db');
const User = require('../server/db/models/User');
const Movie = require('../server/db/models/Movie');
const Cart = require('../server/db/models/Cart');
const Movie_Cart = require('../server/db/models/Movie-Cart');

//CREATE FAKE USERS
const fakeUsers = [];
for (let i = 0; i <= 100; i++) {
  fakeUsers.push({
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isAdmin: false,
  });
}

//CREATE FAKE MOVIES
const fakeMovies = [];
for (let i = 0; i <= 100; i++) {
  fakeMovies.push({
    name: faker.lorem.word(),
    imageUrl: faker.image.imageUrl(208, 288),
    description: faker.lorem.slug(),
    price: 2.99,
  });
}

//CREATE MOVIE/CART
const movieCart = [];
for (let i = 0; i <= 100; i++) {
  movieCart.push({
    quantity: faker.lorem.word(),
    movieId: faker.random.number(100),
    cartId: i,
  });
}

//CREATE FAKE CARTS
const fakeCarts = [];
for (let i = 1; i <= 100; i++) {
  fakeCarts.push({
    movieCount: faker.random.number(5),
    totalPrice: 99.99,
    shippingPrice: 5.99,
    address: faker.address.streetAddress(),
    status: 'Open',
    userId: i, //assign cart to user
  });
}

const bulkSeed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      fakeUsers.map((user) => {
        return User.create(user);
      })
    );
    await Promise.all(
      fakeMovies.map((movie) => {
        return Movie.create(movie);
      })
    );
    await Promise.all(
      fakeCarts.map((cart) => {
        return Cart.create(cart);
      })
    );
    await Promise.all(
      movieCart.map((moviecart) => {
        return Movie_Cart.create(moviecart);
      })
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = bulkSeed;

if (require.main === module) {
  bulkSeed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
