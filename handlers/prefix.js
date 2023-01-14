const fs = require("fs");
const colors = require("colors");

module.exports = (client, config) => {
    console.log("\n" + "[PREFIXO📌] Prefix Handler:".blue);

    fs.readdirSync('./commandsPrefix/').forEach(local => {
        const comandos = fs.readdirSync(`./commandsPrefix/${local}`).filter(arquivo => arquivo.endsWith('.js'))

        for(let file of comandos) {
            let puxar= require(`../commandsPrefix/${local}/${file}`)

            if(puxar.config.name) {
            client.commands.set(puxar.config.name, puxar)

            if(puxar.config.aliases && Array.isArray(puxar.config.aliases))
                puxar.config.aliases.forEach(x => client.aliases.set(x, puxar.config.name))
                console.log(`┕[HANDLER - PREFIXO📌] Carregou um arquivo: ${puxar.config.name} (#${client.commands.size})`.brightGreen)
            
            } else {
                console.log(`┕[HANDLER - PREFIXO📌] Não foi possível carregar o arquivo ${file}, faltando o valor do nome do módulo.`.red)
                continue;

            };
        } 
    });
};
