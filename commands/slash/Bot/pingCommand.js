const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, ApplicationCommandType } = require("discord.js"); 

module.exports = {
    name: "ping",
    description: "[🤖 BOT] Veja meu ping!",
    type: ApplicationCommandType.ChatInput,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },

    run: async (client, interaction, config, db) => {

        const botaoPing = new ActionRowBuilder()
            .addComponents(new ButtonBuilder()
                .setCustomId("ping")
                .setEmoji('🏓')
                .setLabel("Atualizar")
                .setStyle(ButtonStyle.Primary)
            )
  
        const embedPing = new EmbedBuilder()
            .setAuthor({ name: `🏓 Pong!`})
            .addFields({ name: `Ping do bot:`, value: `\`🌐・${client.ws.ping} ms\``})
            .setColor('Blurple')
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
            .setTimestamp()
            .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL({dynamic:true}) });
  
  
        await interaction.reply({ content: `🏓・Aguarde um segundo estou calculando o ping`})
  
        setTimeout( () => {
            interaction.editReply({ content: `${interaction.user}`, embeds: [embedPing], components: [botaoPing]})
        }, 2000 )
  
        const collector = interaction.channel.createMessageComponentCollector({ 
            componentType: ComponentType.Button 
        })
  
        collector.on("collect", (interaction) => {
            if( interaction.customId === "ping" ) {
                interaction.reply({  content: `> Ping do bot: \`🌐・${client.ws.ping} ms\``, ephemeral: true })
            }
        })
    },
};
