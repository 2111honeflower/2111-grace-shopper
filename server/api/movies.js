const router = require('express').Router()
const { models: { Movie }} = require('../db')

//GET /api/movies
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    next(error);
  }
})

module.exports = router
