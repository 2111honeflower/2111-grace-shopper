const express = require('express');
const faker = require('phaker.js');
const app = express();
//const { User, Cart, Movie, Movie-Cart } = require("../server/db/models");


//CREATE FAKE USERS
app.get('/user', (req, res, next) => {
  faker.seed(123); //this seeds for persistant data during demos
  res.json(bulkUsers());
});

function bulkUsers() {
  let users = [];
  for (let i = 0; i < 100; i++) {
    users.push({
      userName: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      isAdmin: false,
    });
  }
}


//CREATE FAKE MOVIES
app.get('/movie', (req, res, next) => {
  faker.seed(123);
  res.json(bulkMovies());
});

function bulkMovies() {
  let movies = [];
  for (let i = 0; i < 100; i++) {
    movies.push({
      name: faker.lorem.word(),
      imageUrl: faker.unsplash.imageUrl(208, 288),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(5.99),
    });
  }
}

//movie-Cart association data goes here


//CREATE FAKE CARTS
app.get('/cart', (req, res, next) => {
  faker.seed(123);
  res.json(bulkCarts());
});

function bulkCarts() {
  let carts = [];
  for (let i = 0; i < users; i++) {
    carts.push({
      movieCount: //TK FROM MOVIE-CART,
      totalPrice: //TK CALCULATED FROM MOVIE-CART
      shippingPrice: 5.99,
      address: faker.address.streetAddress(),
      status: 'Open',
    });
  }
}

//Assign carts to users here

