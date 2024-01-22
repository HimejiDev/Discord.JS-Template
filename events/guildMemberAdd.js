const client = require("..");
const chalk = require("chalk");
const log = require("../logger");

client.on("guildMemberAdd", (member) => {
  log.info(
    `${chalk.cyan(member.user.tag)} joined ${chalk.cyan(
      member.guild.name
    )} [${chalk.cyan(member.guild.id)}]`
  );
});
