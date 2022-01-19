const { models: { Movie, Cart, Movie_Cart }} = require('../db');
const router = require('express').Router();

//GET /api/cart/:cartId
//gets the cart data, movies in the cart and movie_cart association table
//do we want less info? I tried and couldn't figure it out...
router.get('/:cartId', async (req, res, next) =>{
  try {
    const cart = await Cart.findOne({
      where: {
        id: req.params.cartId
      },
      include: { model: Movie }
    });
    res.json(cart)
  } catch (err) {
    next(err);
  }
});

//create cart
//POST /api/cart/:userId
router.post('/:id', async (req, res, next) => {
  //id is user id
  //should be able to push local storage with this route as well
  try {
    const [userCart, created] = await Cart.findOrCreate({
      where: {
        status: 'open',
        userId: req.params.userId
      },
    });
    if (created) {
      res.json(userCart);
    } else {
      res.json('Cannot have two open carts'); // can we merge carts? or is this a case of please sign in?
    }
  } catch (err) {
    next(err);
  }
});

//create Movie_Cart Instance
//POST /api/cart/:cartId
router.post('/:cartId', async (req, res,next) => {

})
  //if cart, add item using movie_cart with movieId and Quantity
  //send those items
  //we're always going to send movie data to movie_cart
//edit cart (includes status)
//edit Movie_Cart Instance
//delete Movie_Cart Instance



module.exports = router;
