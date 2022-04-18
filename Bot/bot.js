const Discord = require("discord.js");

/**
 *
 * @param {Discord.Client} client
 */

module.exports = (client) => {
  const prefix = "!";

  client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;
    else message.reply("hello");
  });
};
