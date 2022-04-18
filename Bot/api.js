const express = require("express");
const Discord = require("discord.js");

/**
 *
 * @param {Discord.Client} client
 * @param {express.Application} api
 */

module.exports = (api, client) => {
  const password = process.env.PASSWORD;

  api.all((req, res, next) => {
    const { key } = req.query;
    if (!key) res.status(404).send("password is needed");
    if (key === password) next();
    else res.status(404).send("wrong password");
  });

  api.all("/", (req, res) => {
    res.status(200).send("hello");
  });

  api.all("/", (req, res) => {
    const { channel } = req.query;
    if (channel) client.channels.cache.get(channel).send("مرحبا");

    res.status(200).send("hello");
  });
};
