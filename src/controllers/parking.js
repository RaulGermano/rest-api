const Parking = require('../models/parking');
const bcrypt = require('bcryptjs');

module.exports = {
	async CreateParking(req, res) {
		const response = await Parking.create(req.body);

		return res.json({
			message: response
		});
	},

	async CreateParkingSpace(req, res) {
		const { value, name, id } = req.body;

		const parking = await Parking.findOne({
			_id: id
		});

		parking.parkingSpace.push({
			value,
			name
		});

		await parking.save();

		return res.json(parking);
	},

	async CreateParkingUser(req, res) {
		const {
			login,
			email,
			password,
			birth,
			sex,
			cpf,
			name,
			accessLevel,
			id
		} = req.body;

		const parking = await Parking.findOne({
			_id: id
		});

		parking.user.push({
			login,
			email,
			password,
			birth,
			sex,
			cpf,
			name,
			accessLevel
		});

		await parking.save();

		return res.json(parking);
	},

	///////////////////////////////////////////////  selects

	async AuthenticateParking(req, res) {
		const { login, password } = req.body;

		const parking = await Parking.findOne({
			'user.login': login
		});

		if (!parking) {
			return res.status(400).send('Usuário não encontrado!');
		}

		if (!(await bcrypt.compare(password, parking.user[0].password))) {
			return res.status(400).send('Senha incorreta!');
		}

		parking.user[0].password = undefined;

		return res.json(parking);
	},

	async SelectParking(req, res) {
		const { login, password } = req.body;

		const parking = await Parking.find({
			'user.login': login
		});

		if (!parking) {
			return res.status(400).send('Usuário não encontrado!');
		}

		if (!(await bcrypt.compare(password, parking.user[0].password))) {
			return res.status(400).send('Senha incorreta!');
		}

		parking.user[0].password = undefined;

		return res.json(parking);
	}

	///////////////////////////////////////////////  updates

	///////////////////////////////////////////////  removes
};
