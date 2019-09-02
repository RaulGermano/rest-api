const express = require('express');
const {
	CreateClient,
	RemoveClient,
	AuthenticateClient
} = require('../controllers/client');

const routes = express.Router();

// routes.get('/', (req, res) => {
// 	res.send('teste');
// });

routes.post('/authClient', AuthenticateClient);

routes.post('/newClient', CreateClient);

routes.post('/removeClient', RemoveClient);

module.exports = routes;
