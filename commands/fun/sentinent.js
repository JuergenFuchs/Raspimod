const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "sentient",
  aliases: ["st"],
  category: "fun",
  description: "sentient bot",
  usage: "sentient",
  run: async (client, message, args) => {
    //Start
    message.delete();

    message.channel.send("Who says im not sentient already?");

    //End
  }
};