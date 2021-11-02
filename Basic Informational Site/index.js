const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	var url = req.url;

	res.setHeader('Content-Type', 'text/html');

	if (url === '/') {
		fs.readFile('./index.html', 'utf8', (err, data) => {
			res.end(data);
		});
	} else if (url === '/about') {
		fs.readFile('./about.html', 'utf8', (err, data) => {
			res.end(data);
		});
	} else if (url === '/contact-me') {
		fs.readFile('./contact-me.html', 'utf8', (err, data) => {
			res.end(data);
		});
	} else {
		fs.readFile('./404.html', 'utf8', (err, data) => {
			res.end(data);
		});
	}
});

server.listen(PORT, () => {
	console.log(`server listening on ${PORT}`);
});
