const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.json

exports.run = (client, message) => {
  const yardim = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription('')
    message.channel.send('KOMUTLAR\nv!1vs1 :: Seçtiğiniz 2 kişiyi savaştırırsınız.\nv!8ball :: Sihirli 8ball sorularınızı cevaplar.\nv!bilgi :: Bot hakkında bilgi verir.\nv!bağış :: Bağış yaparak bize yardımcı ol.\nv!coolresim :: Coolresim gösterir.\nv!davet :: Botun davet linkini gönderir.\nv!herkesebendençay :: Herkese Çay Verir.\nv!istatistik :: Botun istatistik gösterir.\nv!kahkaha :: Kahkaha Atarsınız.\nv!kick :: İstediğiniz kişiyi sunucudan atar.\nv!kilit :: Kanalı istediğiniz kadar süreyle kitler.\nv!koş :: Koşarsınız.\nv!kullanıcıbilgim :: Komutu kullanan kişi hakkında bilgi verir.\nv!sarıl :: Etiketlenen kişiye sarılırsın.\nv!servericon :: Serverin iconunu gönderir.\nv!sigara :: Sigara içmenizi sağlar.\nv!sins-aga :: Johny Sinsi gösterir.\nv!slots :: Slots oyunu oynatır.\nv!slots :: Slots oyunu oynatır.\nv!stresçarkı :: Sizin için bir stres çarkı çevirir.\nv!sunucubilgi :: Sunucu hakkında bilgi verir.\nv!geçici-sustur :: Sureli Susturur.\nv!söv :: Söver.\nv!tkm :: Taş,Kağıt,Makas oynarsınız.\nv!tekmeat :: İstedğiniz kişiye tekme atarsınız.\nv!twerk :: Twerk yapar.\nv!unban :: İstediğiniz kişinin banını kaldırır.\nv!uyar :: İstediğiniz kişiyi uyarır.\nv!uç :: İstedğiniz kişiye uçan tekme atarsınız.\nv!yala :: Yalarsın.\nv!yaz :: İstediğiniz şeyi bota yazdırır.\nv!yazıtura :: Yazı-Tura atar.\nv!yumruhat :: Yumruk Atar.\nv!öldür :: Öldürmek istediğiniz kişiyi öldürür.\nv!öp :: İstediğiniz Kişiyi Öpersiniz :) Mucuk.\nv!şelale :: Şelaleye Bak Beee.\nv!şifre :: Rastgele bir şifre oluşturur.');
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
