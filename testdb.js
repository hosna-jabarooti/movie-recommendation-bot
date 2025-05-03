// logFirstItems.js
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Keyword = require('./models/Keywords');
const Rating = require('./models/Ratings');
const Credit = require('./models/Credits');
const Movie = require('./models/Movies');

const run = async () => {
  await connectDB();

  try {
    const firstKeyword = await Keyword.findOne();
    console.log('First Keyword:', firstKeyword);

    const firstRating = await Rating.findOne();
    console.log('First Rating:', firstRating);

    const firstCredit = await Credit.findOne();
    console.log('First Credit:', firstCredit.cast[0]);

    const firstMovie = await Movie.findOne();
    console.log('First Movie:', firstMovie);

  } catch (error) {
    console.error('Error fetching data:', error.message);
  }

  mongoose.connection.close();
};

run();
