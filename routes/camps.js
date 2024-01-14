const express = require('express');
const router = express.Router();
const campCtrl = require('../controllers/camps');

// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /camps
router.get('/camps', campCtrl.index);




// Use ensureLoggedIn middleware to protect routes
router.get('/new', ensureLoggedIn, campCtrl.new);
router.get('/:id', campCtrl.show);
router.post('/', ensureLoggedIn, campCtrl.create);

module.exports = router;
