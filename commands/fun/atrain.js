const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "atrain",
  aliases: ["at"],
  category: "fun",
  description: "Get the funny meme of atrain",
  usage: "atrain",
  run: async (client, message, args) => {
    //Start
    message.delete();

    message.channel.send("Me when i see a happy couple: https://cdn.discordapp.com/attachments/946156666171297833/1017142539352035409/A-TRAIN-_the_boys_edit.mp4");

    //End
  }
};
