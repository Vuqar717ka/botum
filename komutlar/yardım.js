const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.json

exports.run = (client, message) => {
  const yardim = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('DailyBot\'s', bot.user.avatarURL)
  .addField("**❯Komutlar)"
  .addField("»v!1vs1"             :: Seçtiğiniz 2 kişiyi savaştırırsınız.)
  .addField("»v!8ball"            :: Sihirli 8ball sorularınızı cevaplar.)
  .addField("»v!coolresim"        :: Coolresim gösterir.)
  .addField("»v!herkesebendençay" :: Herkese Çay Verir.)

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
