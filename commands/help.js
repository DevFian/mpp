const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setAuthor('Music Player Indo', bot.user.avatarURL)
.addField(`
mpi!join = Join Your Voice channel
mpi!leave = Leave Your Voice Channel
mpi!invite = Invite bot to the guild`, '---=---=---=---=---=---=---=---=---', true)
.setColor("RANDOM")
  .setThumbnail(bicon)
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
