	module.exports = member => {
	  let guild = member.guild;
	  member.send('Hoşgeldin!');
	  guild.defaultChannel.send(`hg`);
	};
