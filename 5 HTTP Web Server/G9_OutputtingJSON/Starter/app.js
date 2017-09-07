const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const obj = {
    firstname: 'Mike',
    lastname: 'Rags'
  };
  res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');

// Serialize: translating an object into a format that can be stored or transferred
// JSON, CSV, XML and others are popular. 'Deserialize' is the opposite (convert back into an obj)