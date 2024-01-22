module.exports = {
  id: "fruit",
  permissions: [],
  run: async (client, interaction) => {
    await interaction.reply({
      content: `You selected ${interaction.values[0]}!`,
      ephemeral: true,
    });
  },
};
