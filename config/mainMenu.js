const { Markup } = require('telegraf');

const mainMenu = Markup.keyboard([
    ['🎬 Get Recommendation', '🎭 Pick Mood'],
    ['🔁 Restart Bot']
]).resize();

module.exports = { mainMenu }; 