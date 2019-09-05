const express = require('express');

const {
	CreateClient,
	RemoveClient,
	AuthenticateClient
} = require('../controllers/client');

const {
	CreateParking,
	CreateParkingSpace,
	SelectParking
} = require('../controllers/parking');

const {
	CreateParkingUser,
	AuthenticateParking
} = require('../controllers/parkingUser');

const routes = express.Router();

///////////////////////// client

routes.post('/auth-client', AuthenticateClient);

routes.post('/create-client', CreateClient);

routes.delete('/remove-client', RemoveClient);

//////////////////////// parking

routes.post('/select-parkings', SelectParking);

routes.post('/create-parking', CreateParking);

routes.post('/create-parking-space', CreateParkingSpace);

//////////////////////// parking user

routes.post('/auth-parking', AuthenticateParking);

routes.post('/create-parking-user', CreateParkingUser);

module.exports = routes;
