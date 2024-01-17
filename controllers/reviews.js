const Camp = require('../models/camp');

module.exports = {
  create,
  delete: deleteReview
};

async function create(req, res) {
  const camp = await Camp.findById(req.params.id);

  // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  camp.reviews.push(req.body);
  try {
    // Save any changes made to the camp doc
    await camp.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/camps/${camp._id}`);
};

async function deleteReview(req, res) {
  const camp = await Camp.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  // Rogue user!
  if (!camp) return res.redirect('/camps');
  // Remove the review using the remove method available on Mongoose arrays
  camp.reviews.remove(req.params.id);
  // Save the updated camp doc
  await camp.save();
  // Redirect back to the camp's show view
  res.redirect(`/camps/${camp._id}`);
}