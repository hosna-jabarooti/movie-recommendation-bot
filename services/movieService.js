const Movie = require('../models/Movies');

const getRandomMovie = async (filter = {}) => {
  try {
    let matchStage = {};

    if (filter.genres) {
      matchStage = {
        'genres.name': {
          $in: filter.genres.map(name => new RegExp(`^${name}$`, 'i'))
        }
      };
    }

    const randomMovie = await Movie.aggregate([
      { $match: matchStage },
      { $sample: { size: 1 } }
    ]);

    return randomMovie[0];
  } catch (error) {
    console.error('❌ Error getting random movie:', error);
    throw error;
  }
};


module.exports = { getRandomMovie };