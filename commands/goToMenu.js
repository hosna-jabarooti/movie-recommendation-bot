const { mainMenu } = require('../config/mainMenu');

function goToMenu(ctx) {
    ctx.reply('🏠 Back to main menu.', mainMenu);
};

module.exports = { goToMenu };