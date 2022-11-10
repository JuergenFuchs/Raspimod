const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "queen",
  aliases: ["qe"],
  category: "fun",
  description: "The queen has died",
  usage: "queen",
  run: async (client, message, args) => {
    //Start
    message.delete();

    client.channels.cache.get(`595515629172293664`).send(`FUCK YOU`);

    //End
  }
};