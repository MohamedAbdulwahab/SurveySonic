/* passport authentication */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/* keys */
const keys = require('../config/keys');

// use passport's GoogleStrategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);
