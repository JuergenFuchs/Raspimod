const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "palestine",
  aliases: ["pa"],
  category: "fun",
  description: "Get the palestine vid",
  usage: "palestine",
  run: async (client, message, args) => {
    //Start
    message.delete();

    message.channel.send("https://cdn.discordapp.com/attachments/642845852963962881/1016888650052685934/palestine-1.mp4");

    //End
  }
};