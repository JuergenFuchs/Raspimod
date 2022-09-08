const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "jakob",
  aliases: ["jk"],
  category: "fun",
  description: "Get a picture of jakob",
  usage: "jakob",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let result = Math.floor(Math.random() * 101);

    message.channel.send("https://i.kym-cdn.com/entries/icons/original/000/035/767/cover4.jpg");

    //End
  }
};