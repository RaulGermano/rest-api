const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.set('useCreateIndex', true);

const ParkingSpaceSchema = new mongoose.Schema(
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
			default: true
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
			accessibility: {
				type: Boolean
			},
			covered: {
				type: Boolean
			},
			vehicleType: {
				type: Boolean
			},
			services: {
				type: Boolean
			}
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('ParkingSpace', ParkingSpaceSchema);
