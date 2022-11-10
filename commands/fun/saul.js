const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "saul",
  aliases: ["sg"],
  category: "fun",
  description: "Get a funny saul goodman gif",
  usage: "saul",
  run: async (client, message, args) => {
    //Start
    message.delete();

    message.channel.send("https://tenor.com/view/3d-saul-saul-goodman-adamghik-gif-23876766");

    //End
  }
};
