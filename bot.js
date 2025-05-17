const { Telegraf, Markup } = require('telegraf');
const connectDB = require('./config/db');
const { getRandomMovie } = require('./services/movieService');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
console.log(process.env.BOT_TOKEN);

const mainMenu = Markup.keyboard([
    ['🎬 Get Recommendation', '🔁 Restart Bot']
]).resize();


bot.start((ctx) => {
    console.log(ctx.message.from.username)
    ctx.reply('🍿 Hello! Welcome to PopcornRecBot!\nWhat would you like to do?', mainMenu)
});

bot.hears('🔁 Restart Bot', (ctx) => {
    ctx.reply('🔁 Bot restarted from button! Back to the main menu.', mainMenu);
});

bot.hears('🎬 Get Recommendation', async (ctx) => {
    try {
      const movie = await getRandomMovie();
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
    } catch (err) {
      ctx.reply('❌ Failed to fetch a random movie.');
    }
  });
  

  bot.command('random', async (ctx) => {
    try {
      const movie = await getRandomMovie(); // Your DB function
      ctx.reply(`*${movie.title}\n\n${movie.overview}`, {
        reply_markup: {
          keyboard: [
            [{ text: '🎲 Get Another Random Movie' }],
            [{ text: '🏠 Menu' }]
          ],
          resize_keyboard: true,
          one_time_keyboard: false
        }
      });
    } catch (err) {
      ctx.reply('❌ Failed to fetch a random movie. Try again later.');
    }
  });

bot.hears('🎲 Get Another Random Movie', async (ctx) => {
    try {
      const movie = await getRandomMovie();
      ctx.reply(`*${movie.title}*\n\n${movie.overview}`, {
        parse_mode: 'Markdown'
      });
    } catch (err) {
      ctx.reply('❌ Failed to fetch another movie. Try again later.');
    }
  });

  bot.hears('🏠 Menu', (ctx) => {
    ctx.reply('🏠 Back to main menu.', mainMenu);
  });
  

  (async () => {
    try {
      await connectDB();
      await bot.telegram.deleteWebhook();
      await bot.launch();
      console.log('✅ Bot is up and running...');
    } catch (err) {
      console.error('❌ Failed to start bot:', err);
    }
  })();
  
  
