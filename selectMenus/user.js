module.exports = {
  id: "user",
  permissions: [],
  run: async (client, interaction) => {
    var reaction_string = "";
    interaction.members.forEach(async (member) => {
      reaction_string += `You selected: ${member.user.tag}\n`;
    });

    await interaction.reply({
      content: reaction_string,
      ephemeral: true,
    });
  },
};
