const http = require('http');
const countStudents = require('./3-read_file_async.js');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello Holberton School!');
	} else if (req.url === '/students') {
		console.log('This is the list of out students');
		const student = countStudents(process.argv[2]);
		console.log(student);
	}
});
app.listen(port, hostname, () => {});
