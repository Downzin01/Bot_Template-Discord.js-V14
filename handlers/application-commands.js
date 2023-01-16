const { PermissionsBitField, Routes, REST, User } = require('discord.js');
const fs = require("fs");

module.exports = (client, config) => {
    console.log("\n" + "[APPLICATION] Application commands Handler:".blue);

    let commands = [];

    // Slash commands handler:
    fs.readdirSync('./commands/slash/').forEach((dir) => {
        console.log("\n" + '[HANDLER📀] Começou a carregar comandos de barra(Slash Commands)...'.yellow);
        const SlashCommands = fs.readdirSync(`./commands/slash/${dir}`).filter((file) => file.endsWith('.js'));

        for (let file of SlashCommands) {
        let pull = require(`../commands/slash/${dir}/${file}`);

            if (pull.name, pull.description, pull.type == 1) {
                client.slash_commands.set(pull.name, pull);
                console.log(`┕[HANDLER - SLASH📀] Carregou um arquivo: ${pull.name} (#${client.slash_commands.size})`.brightGreen);

                commands.push({
                    name: pull.name,
                    description: pull.description,
                    type: pull.type || 1,
                    options: pull.options ? pull.options : null,
                    default_permission: pull.permissions.DEFAULT_PERMISSIONS ? pull.permissions.DEFAULT_PERMISSIONS : null,
                    default_member_permissions: pull.permissions.DEFAULT_MEMBER_PERMISSIONS ? PermissionsBitField.resolve(pull.permissions.DEFAULT_MEMBER_PERMISSIONS).toString() : null
                });

            } else {
                console.log(`┕[HANDLER - SLASH📀] Não foi possível carregar o arquivo ${file}, valor, descrição ou tipo de nome de módulo ausente não é "1" ou "ApplicationCommandType.ChatInput".`.red)
                continue;

            };
        };
    });

    // User commands handler:
    fs.readdirSync('./commands/apps/').forEach((dir) => {
        console.log("\n" + '[HANDLER📀] Começou a carregar comandos de apps(User Commands)...'.yellow);
        const UserCommands = fs.readdirSync(`./commands/apps/${dir}`).filter((file) => file.endsWith('.js'));

        for (let file of UserCommands) {
        let pull = require(`../commands/apps/${dir}/${file}`);

            if (pull.name, pull.type == 2) {
                client.user_commands.set(pull.name, pull);
                console.log(`┕[HANDLER - APPS📀] Carregou um arquivo: ${pull.name} (#${client.user_commands.size})`.brightGreen);

                commands.push({
                name: pull.name,
                type: pull.type || 2,
                });

            } else {
                console.log(`┕[HANDLER - APPS📀] Não foi possível carregar o arquivo ${file}, o valor do nome do módulo ausente ou o tipo não é 2.`.red)
                continue;

            };
        };
    });

    // Registrando todos os comandos do aplicativo:
    if (!config.Client.ID) {
        console.log("[CRASH] Você precisa fornecer seu ID de bot em config.js!".red + "\n");
        return process.exit();
    };

    const rest = new REST({ version: '10' }).setToken(config.Client.Token);

    (async () => {
        console.log("\n" + '[HANDLER📀] Começou a registrar todos os comandos do aplicativo.'.yellow);

        try {
            await rest.put(
                Routes.applicationCommands(config.Client.ID),
                { body: commands }
            );

            console.log("\n" + '[HANDLER📀] Todos os comandos do aplicativo foram registrados com sucesso.'.brightGreen);
        
        } catch (err) {
            console.log(err);

        };
    })();
};
