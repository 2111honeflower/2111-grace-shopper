const { models: { Movie, Cart, Movie_Cart }} = require('../db');
const router = require('express').Router();

//Note: Create Update

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
//create Movie_Cart Instance
//edit cart
//edit Movie_Cart Instance
//change status on cart
//delete Movie_Cart Instance

// router.post('/:id', async (req, res, next) => {
//   //id is user id or cart id, do I need both?
//   //if cart, add item using movie_cart with movieId and Quantity
//   //send those items

//   //should be able to push local storage with this route as well
//   try {
//     const [userCart, created] = await Cart.findOrCreate({
//       where: {
//         status: 'open',
//         userId: req.params.userId
//       },
//     });
//     //we're always going to send movie data to movie_cart
//     if (created) {
//       res.json(userCart);
//     } else {
//       res.json('Cannot have two open carts'); // can we merge carts? or is this a case of please sign in?
//     }
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
