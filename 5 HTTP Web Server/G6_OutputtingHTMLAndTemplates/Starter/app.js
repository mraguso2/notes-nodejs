const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // add Character encoding to return a string
  let html = fs.readFileSync(`${__dirname}/index.html`, 'utf8'); // pull contents from file
  const message = 'Hello World...';
  html = html.replace('{Message}', message); // manipulate contents of file (string)
  res.end(html); // response is a stream, it is okay that html var was a buffer
}).listen(1337, '127.0.0.1');

/**
 * Template: text designed to be the basis for final text or content after being
 *   processed. Usually some specific template language
 */