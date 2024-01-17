const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  season: {
    type: String, 
    enum: ['spring', 'earlySummer', 'midSummer', 'lateSummer', 'fall', 'winter']
  },
  noiseLevel: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  },
  notes: {
    type: String,
    required: true
  },
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