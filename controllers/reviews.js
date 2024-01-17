const Camp = require('../models/camp');

module.exports = {
  create,
}

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
  res.redirect(`/camps/${camps._id}`);
}