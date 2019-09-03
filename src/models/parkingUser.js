const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.set('useCreateIndex', true);

const ParkingUserSchema = new mongoose.Schema(
	{
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
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('ParkingUser', ParkingUserSchema);
