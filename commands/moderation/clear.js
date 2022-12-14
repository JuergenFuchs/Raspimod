const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
module.exports = {
  name: "clear",
  aliases: ["purge", "clearmsgs"],
  description: "Clear Your Messages!",
  usage: "Clear <Message Amount>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    const userID = "428872151672684544";
    if (
      !(message.member.hasPermission(["MANAGE_GUILD"]) ||
       message.author.id === userID)
    )
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    if (!args[0])
      return message.channel.send(`Please Give Me Amounts Of Messages!`);

    if (isNaN(args[0]))
      return message.channel.send(`Please Give Me Number Value!`);

    if (args[0] > 100)
      return message.channel.send(
        `I Can't Delete ${args[0]} Because Of Discord Limit!`
      );

    let Reason = args.slice(1).join(" ") || "No Reason Provided!";

    message.channel.bulkDelete(args[0]).then((Message) => {});

    //End
  },
};
