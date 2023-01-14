const { QuickDB } = require("quick.db");
const client = require("../../index");
const config = require("../../config/config.js");
const db = new QuickDB();

module.exports = {
   name: "interactionCreate"
};

client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) {
        const command = client.slash_commands.get(interaction.commandName);
        if (!command) return;

        try {
            command.run(client, interaction, config, db);
        } catch (e) {
            console.error(e)
        };
    };

    if (interaction.isUserContextMenuCommand()) { // UserCommand:
        const command = client.user_commands.get(interaction.commandName);
        if (!command) return;

        try {
            command.run(client, interaction, config, db);
        } catch (e) {
            console.error(e)
        };
    };

    if (interaction.isMessageContextMenuCommand()) { // MessageCommmad:
        const command = client.message_commands.get(interaction.commandName);
        if (!command) return;

        try {
            command.run(client, interaction, config, db);
        } catch (e) {
            console.error(e)
        };
    };
});

