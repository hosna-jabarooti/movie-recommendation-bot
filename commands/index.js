const { start } = require('./start');
const { restart } = require('./restart');
const { sendRandomMovieReply } = require('./randomMovie');
const { pickMood } = require('./pickMood');
const { replyMood } = require('./replyMood');
const { goToMenu } = require('./goToMenu');
const { replyToInline } = require('./replyToInline');


module.exports = { start, restart, sendRandomMovieReply, pickMood, replyMood, goToMenu, replyToInline };