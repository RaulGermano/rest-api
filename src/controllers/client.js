const Client = require('../models/client');

module.exports = {
	async CreateClient(req, res) {
		const { login, email, password, name, birth, sex, cpf } = req.body;

		const teste = await Client.create({
			login,
			email,
			password,
			name,
			birth,
			sex,
			cpf
		});

		return res.json({
			message: teste
		});
	},

	RemoveClient(req, res) {
		const { name } = req.body;

		return res.json({ message: name });
	}
};
