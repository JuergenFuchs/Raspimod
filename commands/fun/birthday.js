const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");



module.exports = {
  name: "birthday",
  aliases: ["bd"],
  category: "fun",
  description: "Get the happy birthday message",
  usage: "birthday <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Happy Birthday`)
      .setDescription(`🎉Happy Birthday ${Member.user.username}, the Raspberry Pi wishes luck and hopes you have fun!🥳`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
