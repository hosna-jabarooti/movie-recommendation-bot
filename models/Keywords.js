const mongoose = require('mongoose');

const KeywordsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true 
  },
  keywords: {
    type: String,
    required: true
  }
},{
  collection: 'keywords'
});

module.exports = mongoose.model('Keywords', KeywordsSchema);