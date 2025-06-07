const axios = require('axios');
const TMDB_API_KEY = process.env.TMDB_API_KEY;

async function getPoster(title) {
  const res = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: TMDB_API_KEY,
      query: title,
    }
  });

  const movie = res.data.results[0];
  if (!movie || !movie.poster_path) return null;

  return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
}

module.exports = { getPoster };