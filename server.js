const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3000;

const app = express();

app.use(express.static('public'));
app.use(express.json());

// GET,POST,PUT,DELETE
// CRUD, CREATE, READ, UPDATE, DELETE

app.get('/', function (req, res) {
	const websitePath = path.join(__dirname, './public/index.html');
	res.sendFile(websitePath);
});

app.post('/register', function (req, res) {
	let userData = JSON.parse(
		fs.readFileSync(path.join(__dirname, './users.json'))
	);

	userData.push(req.body);

	fs.writeFileSync(
		path.join(__dirname, './users.json'),
		JSON.stringify(userData)
	);

	res.json(req.body);
});

app.listen(PORT, function () {
	console.log('server running on PORT 3000');
});
