const express = require('express');
const router = express.Router();
const campCtrl = require('../controllers/camps');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET all campgrounds. */
router.get('/', campCtrl.index);

// CREATE A CAMP
router.get('/new', ensureLoggedIn, campCtrl.new)
router.post('/', ensureLoggedIn, campCtrl.create);

//DELETE a CAMP
router.delete('/:id', ensureLoggedIn, campCtrl.delete);

//SHOW the CAMP
router.get('/:id',campCtrl.show);

// EDIT
router.get('/:id/edit', ensureLoggedIn, campCtrl.editView);
router.put('/:id', ensureLoggedIn, campCtrl.edit);


module.exports = router;
