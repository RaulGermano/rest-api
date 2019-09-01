const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect(
	'mongodb+srv://appproparking:appproparking@cluster0-5rwc5.mongodb.net/PROParking?retryWrites=true&w=majority',
	{ useNewUrlParser: true }
);

server.use(express.json());
server.use(routes);

server.listen(3000);
