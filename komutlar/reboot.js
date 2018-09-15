const Discord = require('discord.js');


exports.run = function(client, message) { 
}
  
  
  if (message.author.id === "342380541003300865") {
    message.channel.send('myBot yeniden başlatılıyor...').then(msg => {
      console.log('myBot yeniden başlatılıyor.')
      process.exit(0);
    });
  } else 
    message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin!')

      

;

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
