const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
module.exports = {
  name: "servermute",
  aliases: ["smute", "servermute"],
  description: "Servermute a member",
  usage: "smute <Member ID>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    const userID = "428872151672684544";
    if (
      !(message.member.hasPermission(["MANAGE_GUILD"]) ||
       message.author.id === userID)
    )
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    let person = message.guild.member(message.mentions.users.first());
        await person.edit({mute: true});
    //End
  },
};

