const express = require('express');
const router = express.Router();
const campCtrl = require('../controllers/camps');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET all campgrounds. */
router.get('/', campCtrl.index);

router.get('/new', ensureLoggedIn, campCtrl.new)
router.get('/:id',campCtrl.show);
router.post('/', ensureLoggedIn, campCtrl.create);

module.exports = router;
