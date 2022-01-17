const router = require('express').Router()
const { models: { User }} = require('../db')
const {isAdmin} = require('./admin')

// GET /users
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!

      // 1/15 - Jill
      // the only one who should be looking at users is admin, yes? So if we
      // use isAdmin helper func in api/admin.js, this should limit who can view
      attributes: ['id', 'email', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET /users/:id
router.get('/:id', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'username', 'email',]
    })
    res.json(users)
  } catch(err) {
    next (err)
  }
})

// DELETE / users/:id
router.get('/:id', isAdmin, async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id);
    await userToDelete.destroy()
    res.json(userToDelete)
  } catch(err) {
    next (err)
  }
})


router.post('/', isAdmin, async (req, res, next) => {
  try {
    res.json(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});


router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    const userToUpdate = await User.findByPk(req.params.id);
    res.json(await userToUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});


module.exports = router;
