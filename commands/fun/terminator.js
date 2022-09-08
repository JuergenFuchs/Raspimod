const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "win",
  aliases: ["w"],
  category: "fun",
  description: "Get a win vid",
  usage: "win",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let result = Math.floor(Math.random() * 101);

    message.channel.send("https://cdn.discordapp.com/attachments/946156666171297833/1015605440362598463/ssstik.io_1660801825653.mp4")
    //End
  }
};