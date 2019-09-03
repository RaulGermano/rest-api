const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.set('useCreateIndex', true);

const ParkingQualificationSchema = new mongoose.Schema(
	{
		value: {
			type: Intl
		},
		description: {
			lowercase: true,
			type: String
		},
		client: {
			login: {
				type: String
			},
			email: {
				type: String
			}
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model(
	'ParkingQualification',
	ParkingQualificationSchema
);
