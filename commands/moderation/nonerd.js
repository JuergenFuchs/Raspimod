const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const userID = "428872151672684544";
module.exports = {
  name: "nonerd",
  aliases: [],
  description: "Unnerd A User!",
  usage: "Unnerd <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (
      !(
        message.author.id === userID ||
        message.member.hasPermission(["MANAGE_GUILD"])
      )
    )
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Role = message.guild.roles.cache.find(
      (role) => role.name === "nerd"
    ).id;

    if (!Role)
      return message.channel.send(
        "There is now nerd role, create one with r?nerdcreate or make one manually"
      );
let person = message.guild.member(message.mentions.users.first());
    if (!Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already a nerd!`);
    }
    if (Role && person.roles.cache.has(Role)) {
      person.roles.remove([Role]);
      return message.channel.send("they arent a nerd anymore!");
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  },
};
