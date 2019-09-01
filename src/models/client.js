const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const ClientModel = new mongoose.Schema(
	{
		excluded: {
			type: Boolean,
			default: false
		},
		login: {
			type: String
		},
		email: {
			type: String
		},
		password: {
			type: String
		},
		name: {
			type: String
		},
		birth: {
			type: Date
		},
		sex: {
			type: String
		},
		cpf: {
			type: String
		},
		telephone: [
			{
				ddd: {
					type: String
				},
				number: {
					type: String
				}
			}
		],
		vehicle: [
			{
				excluded: {
					type: Boolean,
					default: false
				},
				available: {
					type: Boolean,
					default: true
				},
				plate: {
					type: String
				},
				name: {
					type: String
				}
			},
			{
				timestamps: true
			}
		]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Client', ClientModel);
