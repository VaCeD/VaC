const Discord = require("discord.js");
const errors = require("../utils/errors.js");



module.exports.run = async (bot, message, args) => {



  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");

  if(!args[0]) return message.channel.send("oof");

  message.channel.bulkDelete(args[0]).then(() => {
    let bicon = bot.user.displayAvatarURL;
    let useruser = "Command Request By: " + message.author.username;
    let userurl = message.author.avatarURL;
    let botembed = new Discord.RichEmbed()
  
    
    .setDescription("~~~~ CLEAR CHAT ~~~~")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Cleared Message :", `${args[0]} ` )
    .setFooter(useruser, userurl)
    return message.channel.send(botembed)/*.then(msg => msg.delete(20000))*/;
    
    
  });

}



module.exports.help = {

  name: "clear"

}

