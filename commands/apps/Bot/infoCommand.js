const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder, ApplicationCommandType } = require("discord.js"); 
const Links = require('../../../JSON/links.json');

module.exports = {
    name: "info",
    description: "[🤖 BOT] info!",
    type: 2,

    run: async (client, interaction, config, db) => {

        const embedInfo = new EmbedBuilder()
            .setTitle("😃 Template Discord.js v14")
            .setDescription("> Aproveite, entre ou explore mais sobre nesse template")
            .setImage("https://repository-images.githubusercontent.com/40484398/e305e980-cb80-11eb-9bb9-c5d3ec013658")
            .setFooter({text: '😊 Gostaria de ajudar contribuindo ou dando uma estrelinha no projeto?'})
            
        const BotaoInfo1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("⭐")
                    .setLabel("Que tal dar uma estrelinha?")
                    .setStyle(ButtonStyle.Link)
                    .setURL(Links.github),

                new ButtonBuilder()
                    .setEmoji("😁")
                    .setLabel("Downzin")
                    .setStyle(ButtonStyle.Link)
                    .setURL(Links.downzin),
            );

        const BotaoInfo2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("💖")
                    .setLabel("Doe")
                    .setStyle(ButtonStyle.Link)
                    .setURL(Links.doe),

                new ButtonBuilder()
                    .setEmoji("❤")
                    .setLabel("Ko-fi")
                    .setStyle(ButtonStyle.Link)
                    .setURL(Links.kofi),

                new ButtonBuilder()
                    .setEmoji("☕")
                    .setLabel("buymeacoffee")
                    .setStyle(ButtonStyle.Link)
                    .setURL(Links.buymeacoffee),
            );

        const selectMenuInfo = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('selectMenu')
					.setPlaceholder("👋 Clique aqui para exibir opções")
					.addOptions(
						{
							label: 'Inicio',
							description: 'Voltar para primeira embed',
							value: 'inicio',
                            emoji: '🏡'
						},
                        {
							label: 'Teste',
							description: 'teste para próxima embed',
							value: 'teste',
                            emoji: '💻'
						},
					),
			);

        interaction.reply({ embeds: [embedInfo], components: [selectMenuInfo, BotaoInfo1, BotaoInfo2]}).then(teste => {

            const filtro = (interaction) => interaction.isSelectMenu()
            const coletor = teste.createMessageComponentCollector({filtro});
      
            coletor.on('collect', async (coletado) => {
                let valor = coletado.values[0]
                coletado.deferUpdate()

                if(valor === "inicio") {
                    interaction.editReply({ embeds: [ embedInfo ], components: [selectMenuInfo, BotaoInfo1, BotaoInfo2]})
                }

                if(valor === "teste") {
                    embedInfo.setDescription("Eba! Se tiver vendo isso, Teste está funcionando normalmente")
                    embedInfo.setImage("https://i.pinimg.com/originals/a2/4c/b5/a24cb568fa40046f8562dbc45cea8506.gif")
                    embedInfo.setColor("Green")
                        
                    interaction.editReply({ embeds: [ embedInfo ], components: [selectMenuInfo, BotaoInfo1, BotaoInfo2]})
                }
            })
        })
    }
}