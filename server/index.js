// import the express library
const express = require('express');

/* passport authentication */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// assign express to app (community convention).
const app = express();

// use passport's GoogleStrategy
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5001;
app.listen(PORT);
