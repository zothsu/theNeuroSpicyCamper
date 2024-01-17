const express = require('express');
const router = express.Router();
const campCtrl = require('../controllers/camps');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET all campgrounds. */
router.get('/', campCtrl.index);
router.get('/new', ensureLoggedIn, campCtrl.new)

router.post('/', ensureLoggedIn, campCtrl.create);

//DELETE a CAMP
router.delete('/:id', campCtrl.delete);

//SHOW the CAMP
router.get('/:id',campCtrl.show);

//GET EDIT PAGE
router.get('/:id/edit', campCtrl.editView);
//PUT EDITS ON DB
router.put('/:id', campCtrl.edit);


module.exports = router;
