const {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  name: "feedback",
  description: "Give feedback about the bot!",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
    // Create a new modal
    const modal = new ModalBuilder()
      .setCustomId("feedbackModal")
      .setTitle("Feedback");

    // / Add commponents to the modal

    // Text input components
    const nameInput = new TextInputBuilder()
      .setCustomId("feedbackModal-nameInput")
      // The label is the prompt the user sees for this input
      .setLabel("What's your name?")
      // Short means only a single line of text
      .setStyle(TextInputStyle.Short);

    const feedbackInput = new TextInputBuilder()
      .setCustomId("feedbackModal-feedbackInput")
      .setLabel("What's your feedback?")
      // Paragraph means multiple lines of text.
      .setStyle(TextInputStyle.Paragraph);

    // An action row only holds one text input,
    // so you need one action row per text input.
    const firstActionRow = new ActionRowBuilder().addComponents(nameInput);
    const secondActionRow = new ActionRowBuilder().addComponents(feedbackInput);

    // Add inputs to the modal
    modal.addComponents(firstActionRow, secondActionRow);

    // Show the modal to the user
    await interaction.showModal(modal);
  },
};
