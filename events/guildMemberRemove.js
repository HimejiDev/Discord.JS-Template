const client = require("..");
const chalk = require("chalk");
const log = require("../logger");

client.on("guildMemberRemove", (member) => {
  log.info(
    `${chalk.cyan(member.user.tag)} left ${chalk.cyan(
      member.guild.name
    )} [${chalk.cyan(member.guild.id)}]`
  );
});
