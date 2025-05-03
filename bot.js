const { Telegraf, Markup } = require('telegraf');

// Replace with your actual bot token
const bot = new Telegraf('7709571085:AAE-8AKk9O-j9rZW-PsNOkaBirOViVzMzjw');

const mainMenu = Markup.keyboard([
    ['🎬 Get Recommendation', '🔁 Restart Bot']
]).resize();

// Respond to /start command
bot.start((ctx) => {
    console.log(ctx.message.from.username)
    ctx.reply('🍿 Hello! Welcome to PopcornRecBot!\nWhat would you like to do?', mainMenu)
});

// bot.command('restart', (ctx) => {
//     ctx.reply('🔁 Bot restarted by typing! Let’s go again!');
//   });

bot.hears('🔁 Restart Bot', (ctx) => {
    ctx.reply('🔁 Bot restarted from button! Back to the main menu.', mainMenu);
});
bot.hears('🎬 Get Recommendation', (ctx) => {
    ctx.reply('✨ Here’s a great movie: The Grand Budapest Hotel');
});

bot.launch();

console.log('Bot is up and running...');
