const { Telegraf } = require('telegraf');
require('dotenv').config();
const connectDB = require('./config/db');
const { start, restart, sendRandomMovieReply, pickMood, replyMood, goToMenu, replyToInline } = require('./commands/');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(start);

bot.hears('🔁 Restart Bot', restart);
bot.hears('🎬 Get Recommendation', sendRandomMovieReply);
bot.hears('🎲 Get Another Random Movie', sendRandomMovieReply);
bot.hears('🎭 Pick Mood', pickMood);
bot.hears('😊 Happy', async (ctx) => replyMood(ctx, 'happy'));
bot.hears('😢 Sad', async (ctx) => replyMood(ctx, 'sad'));
bot.hears('😡 Angry', async (ctx) => replyMood(ctx, 'angry'));
bot.hears('😨 Anxious', async (ctx) => replyMood(ctx, 'anxious'));
bot.hears('🤩 Excited', async (ctx) => replyMood(ctx, 'excited'));
bot.hears('🏠 Menu', goToMenu);
bot.on('inline_query', replyToInline);

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