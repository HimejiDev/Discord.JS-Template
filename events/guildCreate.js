const client = require("..");
const chalk = require("chalk");
const log = require("../logger");

client.on("guildCreate", (guild) => {
  log.info(
    `${chalk.cyan(client.user.tag)} joined ${chalk.cyan(
      guild.name
    )} [${chalk.cyan(guild.id)}]`
  );
});
