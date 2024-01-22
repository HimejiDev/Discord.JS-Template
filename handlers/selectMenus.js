const fs = require("fs");
const log = require("../logger");

module.exports = (client) => {
  fs.readdirSync("./selectMenus/")
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      const selectMenu = require(`../selectMenus/${file}`);
      client.selectMenus.set(selectMenu.id, selectMenu);
    });
  log.success("Select Menus • Loaded");
};
