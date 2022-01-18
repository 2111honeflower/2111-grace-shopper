const { models: { Movie, Cart, Movie_Cart },} = require('../db');
const router = require('express').Router();

//Create Read Update

//GET /api/cart/:userId

router.get('/', async (req, res, next) =>{
  try {

  } catch (error) {

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
