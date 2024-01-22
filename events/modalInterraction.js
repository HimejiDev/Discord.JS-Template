const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const client = require("..");
const log = require("../logger");

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isModalSubmit()) return;

  const modal = client.modals.get(interaction.customId);
  if (!modal) return;

  try {
    if (modal.permissions) {
      if (
        !interaction.memberPermissions.has(
          PermissionsBitField.resolve(modal.permissions || [])
        )
      ) {
        const perms = new EmbedBuilder()
          .setDescription(
            `🚫 ${interaction.user}, You don't have \`${modal.permissions}\` permissions to interact this modal!`
          )
          .setColor("Red");
        return interaction.reply({ embeds: [perms], ephemeral: true });
      }
    }
    await modal.run(client, interaction);
  } catch (error) {
    log.error(
      `Error while executing modal "${modal.name}" | ${error}`,
      "events/modalInteraction.js"
    );
  }
});
