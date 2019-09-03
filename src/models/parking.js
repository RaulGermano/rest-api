const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.set('useCreateIndex', true);

const ParkingSchema = new mongoose.Schema(
	{
		excluded: {
			type: Boolean,
			default: false
		},
		name: {
			lowercase: true,
			type: String
		},
		cnpj: {
			lowercase: true,
			type: String
		},
		telephone: {
			ddd: Intl,
			number: String
		},
		address: {
			createdAt: {
				type: Date,
				default: Date.now
			},
			cep: {
				type: String
			},
			state: {
				lowercase: true,
				type: String
			},
			cidade: {
				lowercase: true,
				type: String
			},
			bairro: {
				type: String,
				select: false
			},
			rua: {
				type: String
			},
			numero: {
				type: String
			},
			coordinates: {
				latitude: {
					type: Number
				},
				longitude: {
					type: Number
				}
			},
			users: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'ParkingUser'
				}
			],
			parkingSpace: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'ParkingSpace'
				}
			],
			qualification: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'ParkingQualification'
				}
			]
		}
		// users: [
		// 	{
		// 		createdAt: {
		// 			type: Date,
		// 			default: Date.now
		// 		},
		// 		excluded: {
		// 			type: Boolean,
		// 			default: false
		// 		},
		// 		login: {
		// 			lowercase: true,
		// 			type: String
		// 		},
		// 		email: {
		// 			lowercase: true,
		// 			type: String
		// 		},
		// 		password: {
		// 			type: String,
		// 			select: false
		// 		},
		// 		birth: {
		// 			type: Date
		// 		},
		// 		sex: {
		// 			type: String
		// 		},
		// 		cpf: {
		// 			type: String
		// 		},
		// 		name: {
		// 			lowercase: true,
		// 			type: String
		// 		},
		// 		accessLevel: {
		// 			type: Intl
		// 		}
		// 	}
		// ],
		// parkingSpace: [
		// 	{
		// 		createdAt: {
		// 			type: Date,
		// 			default: Date.now
		// 		},
		// 		excluded: {
		// 			type: Boolean,
		// 			default: false
		// 		},
		// 		avalible: {
		// 			type: Boolean,
		// 			default: true
		// 		},
		// 		value: {
		// 			type: Intl
		// 		},
		// 		name: {
		// 			lowercase: true,
		// 			type: String
		// 		},
		// 		accessLevel: {
		// 			type: Intl
		// 		},
		// 		description: {
		// 			accessibility: {
		// 				type: Boolean
		// 			},
		// 			covered: {
		// 				type: Boolean
		// 			},
		// 			vehicleType: {
		// 				type: Boolean
		// 			},
		// 			services: {
		// 				type: Boolean
		// 			}
		// 		}
		// 	}
		// ],
		// qualification: [
		// 	{
		// 		createdAt: {
		// 			type: Date,
		// 			default: Date.now
		// 		},
		// 		value: {
		// 			type: Intl
		// 		},
		// 		description: {
		// 			lowercase: true,
		// 			type: String
		// 		},
		// 		client: {
		// 			login: {
		// 				type: String
		// 			},
		// 			email: {
		// 				type: String
		// 			}
		// 		}
		// 	}
		// ]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Parking', ParkingSchema);
