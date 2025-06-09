const { Markup } = require('telegraf');

function pickMood(ctx) {
    ctx.reply('🎭 Choose your mood:', Markup.keyboard([
        ['😊 Happy', '😢 Sad'],
        ['😡 Angry', '😨 Anxious'],
        ['🤩 Excited'],
        ['🏠 Menu']
    ]).resize());
}

module.exports = { pickMood }