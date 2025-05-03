const mongoose = require('mongoose');

const CastSchema = new mongoose.Schema({
  cast_id: Number,
  character: String,
  credit_id: String,
  gender: Number,
  id: Number,
  name: String,
  order: Number,
  profile_path: String,
}, { _id: false });

const CrewSchema = new mongoose.Schema({
  credit_id: String,
  department: String,
  gender: Number,
  id: Number,
  job: String,
  name: String,
  profile_path: String,
}, { _id: false });

const CreditsSchema = new mongoose.Schema({
  cast: [CastSchema],
  crew: [CrewSchema],
  id : String
},{
    collection: 'credits'
});

module.exports = mongoose.model('Credits', CreditsSchema);