const { getGenresForMood } = require('../helpers/moodMapper');
const { getRandomMovie } = require('../services/movieService');
const { getPoster } = require('../helpers/getPoster');

async function replyMood (ctx, mood) {
    const genres = getGenresForMood(mood);
    const movie = await getRandomMovie({ genres });
    sendMoodMovieReply(ctx, movie);
  }

  async function sendMoodMovieReply(ctx, movie) {
    if (!movie) {
      return ctx.reply('😔 No matching movies found.');
    }
  
    const posterUrl = await getPoster(movie.title);
  
    if (posterUrl) {
      await ctx.replyWithPhoto(
        { url: posterUrl },
        {
          caption: `🎥 *${movie.title}*\n\n${movie.overview}`,
          parse_mode: 'Markdown',
          reply_markup: {
            keyboard: [
              [{ text: '🎭 Pick Mood' }, { text: '🏠 Menu' }]
            ],
            resize_keyboard: true
          }
        }
      );
    } else {
      await ctx.reply(`🎥 *${movie.title}*\n\n${movie.overview}`, {
        parse_mode: 'Markdown',
        reply_markup: {
          keyboard: [
            [{ text: '🎭 Pick Mood' }, { text: '🏠 Menu' }]
          ],
          resize_keyboard: true
        }
      });
    }
  }

  module.exports = { replyMood };