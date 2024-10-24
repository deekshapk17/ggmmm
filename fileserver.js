const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((req, res) => {
// Read the 'nav.html' file
fs.readFile('nav.html', (error, data) => {
if (error) {

res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('404 Not Found');
} else {

res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(data);
}
});
});
server.listen(port, (err) => {
if (err) {
console.log('Something went wrong:', err);
} else {

console.log(`Server is listening on port ${port}`);
}
});
