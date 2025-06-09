const { getPoster } = require('../helpers/getPoster');
const Movie = require('../models/Movies');

async function replyToInline(ctx) {
    const query = ctx.inlineQuery.query;

    if (!query || query.length < 2) return;

    try {
        const results = await Movie.find({
            title: { $regex: query, $options: 'i' }
        }).limit(10);

        if (!results.length) {
            return ctx.answerInlineQuery([{
                type: 'article',
                id: 'no-results',
                title: 'No movies found',
                input_message_content: {
                    message_text: '❌ No movies matched your query.'
                }
            }]);
        }

        const inlineResults = await Promise.all(results.map(async (movie, index) => {
            const poster = await getPoster(movie.title);
            const overview = movie.overview?.substring(0, 300) || 'No description.';

            return {
                type: 'article',
                id: String(index),
                title: movie.title,
                description: overview,
                thumb_url: poster || 'https://via.placeholder.com/150x220?text=No+Image',
                input_message_content: {
                    message_text: `🎬 *${movie.title}*\n\n${overview}${poster ? `\n\n[⠀](${poster})` : ''}`,
                    parse_mode: 'Markdown'
                }
            };
        }));

        return ctx.answerInlineQuery(inlineResults.filter(Boolean), {
            cache_time: 0,
            is_personal: true
        });

    } catch (err) {
        console.error('❌ Inline query error:', err.message);
        return ctx.answerInlineQuery([{
            type: 'article',
            id: 'error',
            title: 'Error fetching movies',
            input_message_content: {
                message_text: '⚠️ An error occurred. Try again later.'
            }
        }]);
    }
}

module.exports = { replyToInline };