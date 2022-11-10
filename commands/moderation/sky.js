const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
module.exports = {
  name: "nerd",
  aliases: ["nerd"],
  description: "react to anyone",
  usage: "nerd <Mention Member>",
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
     let Member = message.mentions.users.first();
    if (Member.id === client.user.id)
      return message.channel.send(`https://media.discordapp.net/attachments/642845852963962881/1018452611994763294/6szihf.gif`);
    client.on("message", function (message) {
      if (message.author.id === (Member.id)) {
        message.reply("''" + message.content + "''" + " - :nerd:");
      }
    });
  },
};