const { green, red } = require("chalk");
const { db } = require("../server/db");
const { users, movies } = require('../server/db/dummy-data')
const User = require('../server/db/models/User')
const Movie = require('../server/db/models/Movie')

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(users.map(user => {
      return User.create(user);
    }));
    await Promise.all(movies.map(movie => {
      return Movie.create(movie);
    }));
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
