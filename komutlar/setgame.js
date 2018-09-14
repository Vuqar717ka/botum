const Discord = require('discord.js');
exports.run = function(client, message, args) {
let game = args.slice(0).join(' ');
client.user.setActivity(game);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyun'],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: 'Playing .. Statüsünü Değiştirir.',
  usage: 'setgame <oyun>'
};