const { mainMenu } = require('../config/mainMenu');

function start(ctx) {
    ctx.reply('🍿 Hello! Welcome to PopcornRecBot!\nWhat would you like to do?', mainMenu)
};

module.exports = { start };