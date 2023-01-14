const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require("discord.js"); 

module.exports = {
  config: {
    name: "ping",
    description: "[🤖 BOT] Veja meu ping!",
  },
  permissions: ['SendMessages'],
  owner: false,

  run: async (client, message, interaction, args, prefix, config, db) => {

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
      .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({dynamic:true}) });

    const envio = await message.reply({ content: `🏓・Aguarde um segundo estou calculando o ping`})

    setTimeout( () => {
      envio.edit({ content: `${message.author}`, embeds: [embedPing], components: [botaoPing]})
    }, 2000 )

    const collector = message.channel.createMessageComponentCollector({ 
      componentType: ComponentType.Button 
    })

    collector.on("collect", (interaction) => {
      if( interaction.customId === "ping" ) {
        interaction.reply({ 
          content: `> Ping do bot: \`🌐・${client.ws.ping} ms\``, ephemeral: true })
      }
    })
  },
};
