const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'The NeuroSpicy Camper' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/campgrounds',
    failureRedirect: '/campgrounds'
  }
));

module.exports = router;
