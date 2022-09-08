const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "policedance",
  aliases: ["pd"],
  category: "fun",
  description: "Dancing Officers",
  usage: "policedance",
  run: async (client, message, args) => {
    //Start
    message.delete();

    message.channel.send("https://cdn.discordapp.com/attachments/946156666171297833/1017149000564101271/cowbelly.mp4");

    //End
  }
};