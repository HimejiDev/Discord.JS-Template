const {
  ApplicationCommandType,
  ActionRowBuilder,
  EmbedBuilder,
  UserSelectMenuBuilder,
} = require("discord.js");

module.exports = {
  name: "user",
  description: "Get info about a user!",
  type: ApplicationCommandType.ChatInput,
  default_member_permissions: "Administrator", // permission required
  cooldown: 3000,
  run: async (client, interaction) => {
    // Create a select menu >> https://discordjs.guide/message-components/select-menus.html
    const select = new UserSelectMenuBuilder()
      .setCustomId("user")
      .setPlaceholder("Select multiple users.")
      .setMinValues(1)
      .setMaxValues(10);

    const embed = new EmbedBuilder()
      .setTitle("Choose member(s)!")
      .setDescription("Choose a member(s) to get info about.")
      .setColor("Aqua")
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      });

    const row = new ActionRowBuilder().addComponents(select);
    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
