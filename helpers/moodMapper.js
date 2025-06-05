
const moodToGenres = {
    happy: ['Comedy', 'Romance', 'Adventure'],
    sad: ['Drama', 'Romance'],
    angry: ['Action', 'Thriller'],
    anxious: ['Drama', 'Mystery'],
    excited: ['Action', 'Adventure', 'Sci-Fi']
  };
  
  const getGenresForMood = (mood) => {
    return moodToGenres[mood.toLowerCase()] || [];
  };
  
  module.exports = { getGenresForMood };