const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const Discord = require("discord.js");

module.exports = {
    name: "messageCreate"
};

client.on('messageCreate', async (message) => {
    if (message.channel.type !== 0) return;
    if (message.author.bot) return;

    const prefix = await db.get(`guild_prefix_${message.guild.id}`) || config.Client.Prefixo || "?";

    if (message.author.bot) return;
    if (message.channel.type === Discord.ChannelType.DM) return;

    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase()))
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) {
        if (command.permissions) {
            if (!message.member.permissions.has(PermissionsBitField.resolve(command.permissions || []))) 
            return message.reply({
                embeds: [new EmbedBuilder()
                    .setDescription(`🚫・Infelizmente, você não está autorizado a usar este comando.`)
                    .setColor("Red")
                ]
            })
        };

        if (command.owner, command.owner == true) {
        if (!config.Users.OWNERS) return;

        const allowedUsers = []; 

        config.Users.OWNERS.forEach(user => {
            const fetchedUser = message.guild.members.cache.get(user);
            if (!fetchedUser) 
                return allowedUsers.push('*Unknown User#0000*');
            allowedUsers.push(`${fetchedUser.user.tag}`);
        })

        if (!config.Users.OWNERS.some(ID => message.member.id.includes(ID))) 
            return message.reply({
                embeds: [ new EmbedBuilder()
                    .setDescription(`🚫 Desculpe, mas apenas proprietários podem usar este comando! Usuários permitidos:\n**${allowedUsers.join(", ")}**`)
                    .setColor("Red")
                ]
            })
        };

        try {
            command.run(client, message, args, prefix, config, db);
        } catch (error) {
            console.error(error);
        };
    };
});
