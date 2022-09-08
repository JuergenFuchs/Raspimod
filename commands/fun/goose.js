const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "goose",
  aliases: ["goose"],
  category: "fun",
  description: "Get a Picture of a goose",
  usage: "goose",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let result = Math.floor(Math.random() * 101);

    message.channel.send("https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F597%2F651%2F360.jpg");

    //End
  }
};