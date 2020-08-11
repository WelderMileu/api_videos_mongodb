const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => {
		console.log('Conectado com sucesso')
	}).catch(err => {
		console.log("Erro ao tentar se connectar ao banco de dados" + err)
	})