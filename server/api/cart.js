const { Cart } = require("../db/models")
const router = require("express").Router()

router.get("/:id", async (req, res, next) => {
  try {
    const userCart = await Cart.findOne( {where: {
      userId: req.params.id,
      status: "Open"
    }})
    res.send(userCart)
  } catch (err) {
    next(err)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const userCart = await Cart.findOne( {where: {
      userId: req.params.id,
      status: "Open"
    }})
  res.send(await userCart.update(req.body))
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const [ userCart, created ] = await Cart.findOrCreate( {where: {
      status: "open"
    }})
    if (created) {
      res.send(userCart)
    } else {
      res.send("Cannot have two open carts") // can we merge carts? or is this a case of please sign in?
    }
  } catch (err) {
    next(err)
  }
})

//is cart with id when guest, and then /:id/:userId when logged in?
//does cart model need guest id?
//no deleting of cart since we will use 'placed' to 'clear cart '
