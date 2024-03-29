const Camp = require('../models/camp');

module.exports = {
    index,
    new: newCamp,
    show, 
    create, 
    editView,
    edit,
    delete: deleteCamp
};

// GET TO INDEX
async function index(req, res) {
  const camps = await Camp.find({})
  res.render('camps/index', {camps, title: 'ALL CAMPS', });
}

// GET FORM TO ADD CAMP
function newCamp(req, res) {
  res.render('camps/new', { title: 'NEW CAMP FORM' });
}

async function show(req, res) {
  const camp = await Camp.findById(req.params.id)
  res.render('camps/show', {camp, title: 'CAMPGROUND DETAIL',});
}

async function editView(req, res) {
  const camp = await Camp.findById(req.params.id)
  res.render('camps/edit', {camp, title: 'EDIT CAMPGROUND',});
}
async function edit(req, res) {
  const camp = await Camp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.redirect(`/camps/${camp._id}`)
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

async function deleteCamp(req, res) {
  await Camp.findOneAndDelete(
    {_id: req.params.id, user: req.user._id}
  );
  res.redirect('/camps')
};

