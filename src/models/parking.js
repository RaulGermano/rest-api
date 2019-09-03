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
		adress: {
			createdAt: {
				type: Date,
				default: Date.now
			},
			cep: {
				type: Boolean,
				default: false
			},
			uf: {
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
				type: Date
			},
			numero: {
				type: String
			},
			coordinates: {
				latitude: {
					type: Intl
				},
				longitude: {
					type: Intl
				}
			}
		},
		users: [
			{
				createdAt: {
					type: Date,
					default: Date.now
				},
				excluded: {
					type: Boolean,
					default: false
				},
				login: {
					lowercase: true,
					type: String
				},
				email: {
					lowercase: true,
					type: String
				},
				password: {
					type: String,
					select: false
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
				name: {
					lowercase: true,
					type: String
				},
				accessLevel: {
					type: Intl
				}
			}
		],
		parkingSpace: [
			{
				createdAt: {
					type: Date,
					default: Date.now
				},
				excluded: {
					type: Boolean,
					default: false
				},
				avalible: {
					type: Boolean,
					default: false,
					require: true
				},
				value: {
					type: Intl
				},
				name: {
					lowercase: true,
					type: String
				},
				accessLevel: {
					type: Intl
				},
				description: {
					access: {
						type: Boolean
					},
					cobert: {
						type: Boolean
					},
					vehicleType: {
						type: Boolean
					},
					moreServices: {
						type: Boolean
					}
				}
			}
		],
		qualify: [
			{
				createdAt: {
					type: Date,
					default: Date.now
				},
				note: {
					type: Intl
				},
				description: {
					lowercase: true,
					type: String
				},
				client: {
					_id: {
						type: String
					},
					login: {
						type: String
					},
					email: {
						type: String
					}
				}
			}
		]
	},
	{
		timestamps: true
	}
);

ParkingSchema.pre('save', async function(next) {
	const hash = await bcrypt.hash(this.password, 1);

	this.password = hash;

	next();
});

module.exports = mongoose.model('Parking', ParkingSchema);
