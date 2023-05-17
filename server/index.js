// import the express library
const express = require('express');

/* passport authentication */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/* keys */
const keys = require('./config/keys');

// assign express to app (community convention).
const app = express();

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

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5001;
app.listen(PORT);
