const { Movie, Cart, Movie_Cart } = require('../db');
const router = require('express').Router();

//Note: Create Read Update

//Movie_Cart Routes

//GET /api/cart/:cartId
//gets all the movies in the cart
router.get('/:cartId', async (req, res, next) =>{
  try {
    const cart = await Movie_Cart.findAll({
      where: {
        id: req.params.cartId
      },
      include: { model: Movie}
    });
    res.json(cart)
  } catch (err) {
    next(err);
  }
})


// router.post('/:id', async (req, res, next) => {
//   //id is user id
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
