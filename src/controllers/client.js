const Client = require('../models/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
	async AuthenticateClient(req, res) {
		const { login, password } = req.body;

		try {
			const user = await Client.findOne({
				login
			}).select('+password');

			if (!user) {
				return res.status(400).send('Usuário não encontrado!');
			}

			if (!(await bcrypt.compare(password, user.password))) {
				return res.status(400).send('Senha incorreta!');
			}

			user.password = undefined;

			return res.json(user);
		} catch (error) {
			return res.status(400).send('Usuário não encontrado!');
		}
	},

	async CreateClient(req, res) {
		const response = await Client.create(req.body);

		return res.json({
			message: response
		});
	},

	async RemoveClient(req, res) {
		const { name } = req.body;

		return res.json({
			message: name
		});
	}
};
