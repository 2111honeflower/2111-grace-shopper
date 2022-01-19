const router = require('express').Router();
const {
  models: { User },
} = require('../db');

// helper function for movie/user routes only accessible to admins
async function isAdmin(req, res, next) {
  const currentUser = await User.findOne({
    where: {
      isAdmin: true,
    },
  });
  if (!currentUser.isAdmin) {
    return res.status(403).json('Permission required for this feature.');
  }
}

module.exports = {
  router,
  isAdmin
};
