const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.json

exports.run = (client, message) => {
  const yardim = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription('Alsana yardım')
    message.channel.send('v!1vs1 :: Seçtiğiniz 2 kişiyi savaştırırsınız.\nv!8ball :: Sihirli 8ball sorularınızı cevaplar\nv!coolresim :: Coolresim gösterir.\nv!davet :: Botun davet linkini gönderir.\nv!herkesebendençay :: Herkese Çay Verir.\nv!istatistik :: Botun istatistik gösterir.\nv!kahkaha :: Kahkaha Atarsınız.\nv!kick :: İstediğiniz kişiyi sunucudan atar.\nv!kilit :: Kanalı istediğiniz kadar süreyle kitler.\nv!koş :: Koşarsınız.\nv!kullanıcıbilgim :: Komutu kullanan kişi hakkında bilgi verir.\nv!sarıl :: Etiketlenen kişiye sarılırsın.\nv!servericon :: Serverin iconunu gönderir.\nv!sigara :: Sigara içmenizi sağlar.\nv!sins-aga :: Johny Sinsi gösterir.\nv!slots :: Slots oyunu oynatır.\nv!slots :: Slots oyunu oynatır.\nv!stresçarkı :: Sizin için bir stres çarkı çevirir.');
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
