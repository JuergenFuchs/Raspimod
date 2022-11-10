const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const userID = "428872151672684544";
module.exports = {
  name: "settings",
  aliases: [],
  description: "Shows settings",
  usage: "settings",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (
      !(
        message.member.hasPermission(["MANAGE_GUILD"]) ||
        message.author.id === userID
      )
    )
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    message.channel.send('funny')
  }
};
