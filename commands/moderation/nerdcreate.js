const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const userID = "428872151672684544";
module.exports = {
  name: "nerdcreate",
  aliases: ["nc"],
  description: "Create a nerd role!",
  usage: "nerdcreate",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (
      !(
        message.author.id === userID ||
        message.member.hasPermission(["MANAGE_GUILD"])
      )
    )
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    message.guild.roles.create({
        data: {
            name: "nerd",
            permissions: [],
            color: "RED"
        },
        reason: "Created the nerd role."
    }).catch(console.log)
}
  }

