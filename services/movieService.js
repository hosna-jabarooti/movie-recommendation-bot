const Movie = require('../models/Movies');

const getRandomMovie = async () => {
  try {
    const randomMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
    return randomMovie[0]; // Since $sample returns an array
  } catch (error) {
    console.error('❌ Error getting random movie:', error);
    throw error;
  }
};

module.exports = { getRandomMovie };
