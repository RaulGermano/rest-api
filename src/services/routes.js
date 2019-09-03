const express = require('express');
const {
	CreateClient,
	RemoveClient,
	AuthenticateClient
} = require('../controllers/client');

const { CreateParking } = require('../controllers/parking');

const routes = express.Router();

routes.post('/authClient', AuthenticateClient);

routes.post('/newClient', CreateClient);

routes.post('/removeClient', RemoveClient);

routes.post('/createParking', CreateParking);

module.exports = routes;
