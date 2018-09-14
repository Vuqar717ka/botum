const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.json

exports.run = (client, message) => {
  const yardim = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription('yardım :: Botun Tüm Komutlarını Gösterir\nv!yardım')
    message.channel.send(yardim);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['v!yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
