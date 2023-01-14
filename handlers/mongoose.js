const mongoose = require('mongoose');
const config = require("../config/config.js");
const colors = require("colors");

module.exports = (client) => {
	console.log("\n" + "[DATABASE🍃] Começou a se conectar ao MongoDB...".brightYellow);
	const mongo = process.env.MONGO || config.Handlers.MongoDB;
	
	if (!mongo) {
		console.log("[AVISO😨] Mongo URI/URL não foi fornecido! (Não obrigatório)".red);
	} else {
		mongoose.set('strictQuery', false);
		mongoose.connect(mongo, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}).catch((e) => console.log(e))

		mongoose.connection.once("open", () => {
			console.log("[DATABASE🍃] Conectado ao MongoDB com sucesso!".brightGreen);
		})
		return;
	}
}
