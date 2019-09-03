const Parking = require('../models/parking');
const bcrypt = require('bcryptjs');

module.exports = {
	async CreateParking(req, res) {
		const response = await Parking.create(req.body);

		return res.json({
			message: response
		});
	}
};
