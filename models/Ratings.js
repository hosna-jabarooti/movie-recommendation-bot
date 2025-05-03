const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  }
}, { collection: 'ratings' });

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;