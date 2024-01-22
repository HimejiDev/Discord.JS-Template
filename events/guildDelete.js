const client = require("..");
const chalk = require("chalk");
const log = require("../logger");

client.on("guildDelete", (guild) => {
  log.info(
    `${chalk.cyan(client.user.tag)} left ${chalk.cyan(
      guild.name
    )} [${chalk.cyan(guild.id)}]`
  );
});
