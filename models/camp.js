const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  // Don't forget to add the comma above then
  // add the 3 new properties below
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});


const campSchema = new Schema({
  name: { 
    type: String, 
    required: true },
  description: String,
  totalSites: {
    type: Number,
    min: 1,
    max: 9999
  },
  noiseLevel: {
    type: Number,
    min: 1,
    max: 5
  },
  location: {
    type: String,
  },
  rvPermitted: { 
    type: Boolean, 
    default: true },
  reviews: [reviewSchema]
}, {
  timestamps: true
});




module.exports = mongoose.model('Camp', campSchema);