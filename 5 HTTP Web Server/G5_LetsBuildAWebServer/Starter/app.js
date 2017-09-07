const http = require('http'); // http core module

/**
 * create server is creating an object and giving a callback, which
 * is actually turned into an event listener using the event emitter code
 * inside nodejs. Have an http request and respnse and allows us to send things
 * back down the stream. Node js will create an http response that the browser can
 * understand and a listen with a port and address will make sure that the request
 * from the browser is routed properly to this code
 */
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // .end means last thing you are going to send, so don't need .send
  res.end('Hello world\n'); // good way to end with new line charac
}).listen(1337, '127.0.0.1');