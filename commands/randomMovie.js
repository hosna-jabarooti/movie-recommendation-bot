const { getRandomMovie } = require('../services/movieService');
const { getPoster } = require('../helpers/getPoster');

const sendRandomMovieReply = async (ctx) => {
    try {
        const movie = await getRandomMovie();
        const posterUrl = await getPoster(movie.title);
        if (posterUrl) {
            await ctx.replyWithPhoto(
                { url: posterUrl },
                {
                    caption: `🎬 ${movie.title}\n\n${movie.overview}`,
                    parse_mode: 'Markdown',
                    reply_markup: {
                        keyboard: [
                            [{ text: '🎲 Get Another Random Movie' }],
                            [{ text: '🏠 Menu' }]
                        ],
                        resize_keyboard: true,
                        one_time_keyboard: false
                    }
                });
        }
        else {
            await ctx.reply(`🎬 ${movie.title}\n\n${movie.overview}`, {
                reply_markup: {
                    keyboard: [
                        [{ text: '🎲 Get Another Random Movie' }],
                        [{ text: '🏠 Menu' }]
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            });
        }
    } catch (err) {
        ctx.reply('❌ Failed to fetch a random movie.');
    }
}

module.exports = { sendRandomMovieReply };