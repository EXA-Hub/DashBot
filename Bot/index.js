require("dotenv").config();
const express = require("express");
const Discord = require("discord.js");
const api = express();
const client = new Discord.Client({
  intents: 32767,
  presence: {
    status: "online",
    activities: [
      {
        name: `جرب الـ(/)ـسلاش لرؤية الأوامر`,
        type: "PLAYING",
      },
    ],
  },
});

api.listen(3001, () => {
  console.log("api");
});

client.on("ready", () => {
  console.log("client");
});

client.login(process.env.TOKEN);

require("./api.js")(api, client);
require("./bot.js")(client);
