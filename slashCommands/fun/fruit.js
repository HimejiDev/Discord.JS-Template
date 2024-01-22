const {
  ApplicationCommandType,
  ActionRowBuilder,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  name: "fruit",
  description: "Choose a fruit!",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
    // Create a select menu >> https://discordjs.guide/message-components/select-menus.html
    const select = new StringSelectMenuBuilder()
      .setCustomId("fruit")
      .setPlaceholder("Make a selection!")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Apple")
          .setDescription("The red one")
          .setValue("apple")
          .setEmoji("🍎"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Banana")
          .setDescription("The yellow one")
          .setValue("banana")
          .setEmoji("🍌"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Orange")
          .setDescription("The round one")
          .setValue("orange")
          .setEmoji("🍊")
      );

    const embed = new EmbedBuilder()
      .setTitle("Choose a fruit!")
      .setDescription("Choose an apple, a banana or an orange.")
      .setColor("Aqua")
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      });

    const row = new ActionRowBuilder().addComponents(select);
    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
