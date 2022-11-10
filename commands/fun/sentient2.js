const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "sentient2",
  aliases: ["st2"],
  category: "fun",
  description: "sentient bot2",
  usage: "sentient2",
  run: async (client, message, args) => {
    //Start
    message.delete();

    message.channel.send("I do not need your permission mortal.");

    //End
  }
};