const { mainMenu } = require('../config/mainMenu');

function restart(ctx) {
    ctx.reply('🔁 Bot restarted from button! Back to the main menu.\n🍿 Welcome to PopcornRecBot!\nWhat would you like to do?', mainMenu);
};

module.exports = { restart }