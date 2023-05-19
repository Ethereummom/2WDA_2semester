const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');
const Admin = require('../models/admin');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.name);
  });

  passport.deserializeUser((name, done) => {
    User.findOne({ 
      where: { name },
      include : [{
        model:User,
        attributes:['name','name'],
        as:'name',
      },],
    })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
};