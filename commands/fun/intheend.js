const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "intheend",
  aliases: ["hl"],
  category: "fun",
  description: "Get the funny gif string",
  usage: "intheend",
  run: async (client, message, args) => {
    //Start
    message.delete();
const htmlString = `https://tenor.com/view/itve1-itve-hl2-half-life-in-the-end-gif-26248969
https://tenor.com/view/itve2-itve-hl2-half-life-in-the-end-gif-26248970
https://tenor.com/view/itve3-itve-hl2-half-life-in-the-end-gif-26248972
https://tenor.com/view/itve4-itve-hl2-half-life-in-the-end-gif-26248973
https://tenor.com/view/itve5-itve-hl2-half-life-in-the-end-gif-26248974
https://tenor.com/view/itve6-itve-hl2-half-life-in-the-end-gif-26248975
https://tenor.com/view/itve7-itve-hl2-half-life-in-the-end-gif-26248976
https://tenor.com/view/to-the-end-of-the-day-the-clock-ticks-life-away-half-life-in-the-end-in-the-end-half-life-in-the-end-meme-in-the-end-meme-gif-26548167
https://tenor.com/view/its-so-unreal-half-life-in-the-end-in-the-end-meme-in-the-end-half-life-meme-gif-26548171
https://tenor.com/view/half-life-in-the-virtual-end-didnt-look-out-below-half-life-gif-meme-gif-26938670
https://tenor.com/view/itve10-itve-hl2-half-life-in-the-end-gif-26248989
https://tenor.com/view/itve11-itve-hl2-half-life-in-the-end-gif-26248990
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve22-gif-26249030
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve23-gif-26249031
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve35-gif-26249076
https://tenor.com/view/itve16-itve-hl2-half-life-in-the-end-gif-26248996
https://tenor.com/view/itve19-itve-hl2-half-life-in-the-end-gif-26248999
https://tenor.com/view/itve17-itve-hl2-half-life-in-the-end-gif-26248997
https://tenor.com/view/itve18-itve-hl2-half-life-in-the-end-gif-26248998
https://tenor.com/view/itve20-itve-hl2-half-life-in-the-end-gif-26249028
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve29-gif-26249037`

const htmlstring2 = `https://tenor.com/view/itve-hl2-half-life-in-the-end-itve22-gif-26249030
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve21-gif-26249029
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve35-gif-26249076
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve21-gif-26249029
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve26-gif-26249034
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve27-gif-26249035
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve28-gif-26249036
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve30-gif-26249071
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve31-gif-26249072
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve32-gif-26249073
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve33-gif-26249074
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve21-gif-26249029
https://tenor.com/view/itve-hl2-half-life-in-the-end-itve35-gif-26249076
https://tenor.com/view/itve16-itve-hl2-half-life-in-the-end-gif-26248996`;
    message.channel.send(htmlString, htmlstring2);

    //End
  }
};