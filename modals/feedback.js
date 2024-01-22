const { verifyRole } = require("../config.json");

module.exports = {
  id: "feedbackModal",
  permissions: [],
  run: async (client, interaction) => {
    const name = interaction.fields.getTextInputValue(
      "feedbackModal-nameInput"
    );
    const feedback = interaction.fields.getTextInputValue(
      "feedbackModal-feedbackInput"
    );

    await interaction.reply({
      content: `Thanks for your feedback, ${name}!\nYour feedback was: "${feedback}"`,
      ephemeral: true,
    });
  },
};
