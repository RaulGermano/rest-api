const Client = require('../models/client');

module.exports = {
	async CreateClient(req, res) {
		const response = await Client.create(req.body);

		return res.json({
			message: response
		});
	},

	RemoveClient(req, res) {
		const { name } = req.body;

		return res.json({ message: name });
	}
};
