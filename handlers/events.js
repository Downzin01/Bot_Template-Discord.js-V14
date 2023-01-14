const fs = require("fs");
const colors = require("colors");

module.exports = (client) => {
  console.log("\n" + "[EVENTOS💿] Eventos Handler:".blue);
  
  fs.readdirSync('./events/').forEach(dir => {
		const commands = fs.readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'));
		for (let file of commands) {
      
			let pull = require(`../events/${dir}/${file}`);
			if (pull.name) {
				client.events.set(pull.name, pull);
				console.log(`┕[HANDLER - EVENTOS💿] Carregou um arquivo: ${pull.name}`.brightGreen)
			} else {
				console.log(`┕[HANDLER - EVENTOS💿] Não foi possível carregar o arquivo ${file}. nome ou pseudônimos ausentes.`.red)
				continue;
			}
		}
	});
}