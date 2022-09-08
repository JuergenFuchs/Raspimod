const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "serverlist",
  aliases: ["sl"],
  description: "Lists all servers the bot is in",
  usage: "serverlist",
  run: async (client, message, args) => {
    message.channel.send(client.guilds.cache.map(m => `${m.name} | ${m.id}`).join("\n"))
  },
};
