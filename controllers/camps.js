const Camp = require('../models/camp');

module.exports = {
    index,
    new: newCamp,
    show, 
    create
};

// GET TO INDEX
async function index(req, res) {
  res.render('camps/index', { 
    title: 'ALL CAMPS', });
}

// GET FORM TO ADD CAMP
function newCamp(req, res) {
  res.render('camps/new', { title: 'NEW CAMP FORM' });
}

async function show(req, res) {
  const camp = await Camp.findById(req.params.id)
  res.render('camps/show', {camp, title: 'Camground Detail',});
}

async function create(req, res) {
  req.body.user = req.user._id
  console.log(req.body)
  try {
    const camp = await Camp.create(req.body);
    res.redirect(`/camps/${camp._id}`)
  } catch (err) {
    console.log(err)
    res.render('camps/new', { 
      title: 'create a campground', 
      errorMsg: err.message
    });
  };
}