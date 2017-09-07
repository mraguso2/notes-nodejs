const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  /**
   * create a readable stream and read the contents in index.html
   * pipe it to a writable stream, aka the res
   * So every chunk of data read from the file will be buffered and
   * then piped out the http response stream
   * More efficient than reading the whole file and then sending it
   */
  fs.createReadStream(`${__dirname}/index.htm`).pipe(res);
  // browser is used to receiving chunks of data...TCP packets
}).listen(1337, '127.0.0.1');