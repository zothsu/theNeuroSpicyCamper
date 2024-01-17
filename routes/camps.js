const express = require('express');
const router = express.Router();
const campCtrl = require('../controllers/camps');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET all campgrounds. */
router.get('/', campCtrl.index);
router.get('/new', ensureLoggedIn, campCtrl.new)

//SHOW the CAMP
router.get('/:id',campCtrl.show);

//GET EDIT PAGE
router.get('/:id/edit', campCtrl.editView)
//PUT/PUSH EDITS
router.put('/:id', campCtrl.edit)

router.post('/', ensureLoggedIn, campCtrl.create);

module.exports = router;
