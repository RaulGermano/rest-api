const express = require('express');
const { CreateClient, RemoveClient } = require('../controllers/client');

const routes = express.Router();

// routes.get('/', (req, res) => {
// 	res.send('teste');
// });

routes.post('/newClient', CreateClient);

routes.post('/newClient', RemoveClient);

module.exports = routes;
