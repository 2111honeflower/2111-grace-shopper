const router = require('express').Router();
const { models: { Movie }} = require('../db');

//GET /api/movies
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    next(err);
  }
});

//GET /api/movies/:id
router.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findOne({
      where: {
        id: req.params.id,
      }
    });
    res.json(movie);
  } catch (err) {
    next(err);
  }
});

//POST /api/movies
router.post('/', async (req, res, next) =>{
  try {
    res.status(201).send(await Movie.create(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
