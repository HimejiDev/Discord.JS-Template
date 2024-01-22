const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const client = require("..");
const log = require("../logger");
const chalk = require("chalk");

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
    log.info(
      `${chalk.cyan(interaction.user.tag)} selected ${chalk.cyan(
        selectMenu.id
      )} | g: ${chalk.cyan(interaction.guild.name)} [${chalk.cyan(
        interaction.guild.id
      )}] | c: ${chalk.cyan(interaction.channel.name)} [${chalk.cyan(
        interaction.channel.id
      )}]`
    );
    await selectMenu.run(client, interaction);
  } catch (error) {
    log.error(
      `Error while executing select menu "${selectMenu.id}" | ${error}`,
      "events/selectMenuInteraction.js"
    );
  }
});
