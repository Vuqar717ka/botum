const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.json

exports.run = (client, message) => {
  const yardim = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription('v!1vs1 :: Seçtiğiniz 2 kişiyi savaştırırsınız.\nv!8ball :: Sihirli 8ball sorularınızı cevaplar\nv!coolresim :: Coolresim gösterir.\nv!davet :: Botun davet linkini gönderir.\nv!herkesebendençay :: Herkese Çay Verir.\nv!istatistik :: Botun istatistik gösterir.n\v!kahkaha :: Kahkaha Atarsınız.n\v!kick :: İstediğiniz kişiyi sunucudan atar.n\v!kilit :: Kanalı istediğiniz kadar süreyle kitler.n\v!koş :: Koşarsınız.n\v!kullanıcıbilgim :: Komutu kullanan kişi hakkında bilgi verir.n\v!sarıl :: Etiketlenen kişiye sarılırsın.n\v!servericon :: Serverin iconunu gönderir.n\v!sigara :: Sigara içmenizi sağlar.n\v!sins-aga :: Johny Sinsi gösterir.n\v!slots :: Slots oyunu oynatır.n\v!slots :: Slots oyunu oynatır.n\v!stresçarkı :: Sizin için bir stres çarkı çevirir.n\v!sunucubilgi :: Sunucu hakkında bilgi verir.n\v!geçici-sustur :: Sureli Susturur.n\v!söv :: Söver.n\v!tkm :: Taş,Kağıt,Makas oynarsınız.n\v!tekmeat :: İstedğiniz kişiye tekme atarsınız.n\v!twerk :: Twerk yapar.n\v!unban :: İstediğiniz kişinin banını kaldırır.n\v!uyar :: İstediğiniz kişiyi uyarır.n\v!uç :: İstedğiniz kişiye uçan tekme atarsınız.n\v!yala :: Yalarsın.n\v!yaz :: İstediğiniz şeyi bota yazdırır.n\v!yazıtura :: Yazı-Tura atar.n\v!yumruhat :: Yumruk Atar.n\v!öldür :: Öldürmek istediğiniz kişiyi öldürür.n\v!öp :: İstediğiniz Kişiyi Öpersiniz :) Mucuk.n\v!şelale :: Şelaleye Bak Beee.n\v!şifre :: Rastgele bir şifre oluşturur.)
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
