const { models: { Movie, Cart, Movie_Cart }} = require('../db');
const router = require('express').Router();


//GET /api/cart/:cartId
//gets the cart data, movies in the cart and movie_cart association table
//do we want less info? I tried and couldn't figure it out...
router.get('/:cartId', async (req, res, next) =>{
  try {
    // const cart = await Movie_Cart.findAll({
    //   where: {
    //     cartId: req.params.cartId
    //   }
    // })
    const cart = await Cart.findAll({
      where: {
        cartId: req.params.cartId
      },
      include: [
        {
          model: Movie,
          through: { attributes: [] }
        }
    ]})
      // const movies = await cart.map((movie) =>{ return Movie.findByPk(movie.movieId)}
      // )
  //   const cart = await Cart.findOne({
  //     where: {
  //       id: req.params.cartId
  //     },
  //     include: [{ model: Movie_Cart,
  //       where: {
  //         cartId: req.params.cartId
  //       }
  //     }
  //   ]
  // });
    res.json(cart)
  } catch (err) {
    next(err);
  }
});

  //id is user id
  //should be able to push local storage with this route as well

//MEMBER
//create cart
//POST /api/cart/:userId
router.post('/:id', async (req, res, next) => {
  try {
    const [userCart, created] = await Cart.findOrCreate({
      where: {
        userId: req.params.id,
        status: "Open",
      },
    });
      res.json(userCart)
  } catch (err) {
    next(err);
  }
});


//create Movie_Cart Instance
//POST /api/cart/:cartId
router.post('/:cartId/:movieId', async (req, res, next) => {
  try {
    let cart =  await Cart.findOne({
      where: {
        id: req.params.cartId
      },
      include: { model: Movie }
    });
    let row =  await cart.addMovie(req.params.movieId)
    res.send(row) //SEND ROW?
  } catch (err) {
    next(err);
  }
})
  //if cart, add item using movie_cart with movieId and Quantity
  //send those items
  //we're always going to send movie data to movie_cart
//edit cart (includes status)
//edit Movie_Cart Instance
//delete Movie_Cart Instance


router.get("/:id", async (req, res, next) => {
  try {
    const userCart = await Cart.findOne( {where: {
      userId: req.params.id,
      status: "Open"
    }})
    res.json(userCart)
  } catch (err) {
    next(err)
  }
})


module.exports = router;
