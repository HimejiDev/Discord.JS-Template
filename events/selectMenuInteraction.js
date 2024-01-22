const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const client = require("..");
const log = require("../logger");

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isAnySelectMenu()) return;

  const selectMenu = client.selectMenus.get(interaction.customId);
  if (!selectMenu) return;

  try {
    if (selectMenu.permissions) {
      if (
        !interaction.memberPermissions.has(
          PermissionsBitField.resolve(selectMenu.permissions || [])
        )
      ) {
        const perms = new EmbedBuilder()
          .setDescription(
            `🚫 ${interaction.user}, You don't have \`${selectMenu.permissions}\` permissions to interact this modal!`
          )
          .setColor("Red");
        return interaction.reply({ embeds: [perms], ephemeral: true });
      }
    }
    await selectMenu.run(client, interaction);
  } catch (error) {
    log.error(
      `Error while executing select menu "${selectMenu.id}" | ${error}`,
      "events/selectMenuInteraction.js"
    );
  }
});
