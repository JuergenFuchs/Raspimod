const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
module.exports = {
  name: "ner2d",
  aliases: ["nerd2", "n"],
  description: "Nerd a member",
  usage: "nerd2 <Member ID>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    await message.guild.roles.fetch();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    const userID = "428872151672684544";
    if (
      !(
        message.member.hasPermission(["MANAGE_GUILD"]) ||
        message.author.id === userID
      )
    )
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    let role = message.guild.roles.cache.find((role) => role.name === "nerd");
    let person = message.guild.member(message.mentions.users.first());
    person.roles.add(role);
    //End
    client.on("message", function (message) {
      if (message.member.roles.cache.some((role) => role.name === "nerd")) {
        message.reply("''" + message.content + "''" + " - :nerd:");
      }
    });
  },
};
