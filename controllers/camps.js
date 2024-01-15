const Camp = require('../models/camp');

module.exports = {
    index,
    new: newFlight,
};


async function index(req, res) {
  res.render('camps/index', { title: 'indexx', });
}

function newFlight(req, res) {
  res.render('camps/new', { title: 'Anew flightt', errorMsg: '' });
}