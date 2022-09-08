const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "andike",
  aliases: ["ar"],
  category: "fun",
  description: "Get the funny meme of andike",
  usage: "andike",
  run: async (client, message, args) => {
    //Start
    message.delete();

    message.channel.send("https://cdn.discordapp.com/attachments/1015666483688382546/1015683616094830723/Rike_Andi.mov");

    //End
  }
};