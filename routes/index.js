const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'The NeuroSpicy Camper' });
});

/* GET all campgrounds. */
router.get('/camps', function(req, res, next) {
  res.render('camps', { title: 'The NeuroSpicy Camper' });
});

/* ADD A NEW campground. */
router.post('/campgrounds/new', function(req, res, next) {
  res.render('add a campground', { title: 'The NeuroSpicy Camper' });
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
    successRedirect: '/camps',
    failureRedirect: '/camps'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/camps');
  });
});


module.exports = router;
