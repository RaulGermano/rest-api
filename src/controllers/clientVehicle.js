const Client = require('../models/client');

module.exports = {
	///////////////////////////////////////////////  creates

	async CreateClientVehicle(req, res) {
		const { plate, name, client_id } = req.body;

		const client = await Client.findOne({
			_id: client_id
		});

		// client.update(
		// 	{ 'vehicle.plate': 'admin' },
		// 	{ $addToSet: { 'vehicle.plate': plate } }
		// );

		const teste = await Client.updateOne(
			{ _id: client_id, 'vehicle.plate': { $ne: plate } },
			{
				$push: {
					vehicle: { plate, name }
				}
			}
		);

		// client.update(
		// 	{ 'vehicle.plate': { $ne: plate } },
		// 	{ $push: { vehicle: plate } },
		// 	err => {
		// 		console.log(err);
		// 	}
		// );

		// client.vehicle.push({
		// 	plate,
		// 	name
		// });

		// await teste.save();

		return res.json(client);
	},

	///////////////////////////////////////////////  selects

	async SelectClientVehicle(req, res) {
		const {} = req.body;

		const clientVehicle = await Parking.find({});

		return res.json(clientVehicle);
	}

	///////////////////////////////////////////////  updates

	///////////////////////////////////////////////  removes
};
