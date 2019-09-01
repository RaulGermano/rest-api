const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', (req, res) => {
	res.json({
		message: 123
	});
});

server.listen(3000);
