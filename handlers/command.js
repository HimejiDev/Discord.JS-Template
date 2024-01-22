const fs = require("fs");
const log = require("../logger");

module.exports = (client) => {
  fs.readdirSync("./commands/").forEach((dir) => {
    const files = fs
      .readdirSync(`./commands/${dir}/`)
      .filter((file) => file.endsWith(".js"));
    if (!files || files.length <= 0) log.warning("0 Commands found");
    files.forEach((file) => {
      let command = require(`../commands/${dir}/${file}`);
      if (command) {
        client.commands.set(command.name, command);
        if (command.aliases && Array.isArray(command.aliases)) {
          command.aliases.forEach((alias) => {
            client.aliases.set(alias, command.name);
          });
        }
      } else {
        log.warning(`Failed to load command "${file}"`);
      }
    });
  });
  log.success("Commands • Loaded");
};
