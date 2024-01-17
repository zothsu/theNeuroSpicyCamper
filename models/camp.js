const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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




module.exports = mongoose.model('Camp', campSchema);