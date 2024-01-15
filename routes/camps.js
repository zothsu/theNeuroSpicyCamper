const express = require('express');
const router = express.Router();
const campCtrl = require('../controllers/camps');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET all campgrounds. */
router.get('/camps', function(req, res, next) {
  res.render('camps', { title: 'ALL CAMPS' });
});

router.get('/camps/new', function(req, res, next) {
  res.render('camps/new', {title: 'NEW CAMPS'})
})
module.exports = router;
