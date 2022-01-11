const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

// GET /users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET /users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'username', 'email',]
    })
    res.json(users)
  } catch(error) {
    next (error)
  }
})