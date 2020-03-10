const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
// const User = mongoose.model('user');
// const keys = require('../config/db');
const User = require('../models/User');
const config = require('../config/index');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKeys;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            console.log('user :', user);
            return done(null, user);
            //add role
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
