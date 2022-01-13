const router = require('express').Router()
const { models: {User }} = require('../db')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    res.json({ token: await User.authenticate(req.body)});
  } catch (err) {
    next(err)
  }
})


router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.json({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).json('User already exists')
    } else {
      next(err)
    }
  }
})

router.get('/me', async (req, res, next) => {
  try {
    res.json(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})
