const translate = require('@iamtraction/google-translate');
const {Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "translate",
  aliases: ["ts"],
  description: "Translate a Text",
  usage: "translate",
  /**
  * @param {Client} client
  * @param {Messsage} message
  * @param {String[]} args
  */
  run: async (client, message, args) => {
    const query = args.join(" ");
    if(!query) return message.reply('Please specify a text to be translated');
    const translated = await translate(query, { to: 'en'});
    message.channel.send(translated.text);
  }
}