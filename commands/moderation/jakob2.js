const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
module.exports = {
  name: "jakob2",
  aliases: ["j2"],
  description: "react to jakob",
  usage: "jakob2",
  run: async (client, message, args) => {
    //Start
    message.delete();
    const owner = "428872151672684544";
    if (
      !(
        message.member.hasPermission(["MANAGE_GUILD"]) ||
        message.author.id === owner
      )
    )
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    const jakob = "751463271390904430";
    client.on("message", function (message) {
      if (message.author.id === (jakob)) {
        message.reply("''" + message.content + "''" + " - :nerd:");
      }
    });
  },
};
