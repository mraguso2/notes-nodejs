const express = require('express');

const app = express(); // this will also be fn with props & methods on it

// process object globally available by node
const port = process.env.PORT || 3000; // you can setup env variables when you deploy

/**
 * HTTP Method: specifies the type of action the request wishes to make
 *   GET, POST, DELETE, and others (also called verbs)
 */
app.get('/', (req, res) => {
  // not putting Content-Type...express methods and res obj look at what sending and try to
  // take care of it for you
  res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', (req, res) => {
  // .json will convert obj to json string
  res.json({ firstname: 'Mike', lastname: 'Rags' });
});

app.listen(port); // wouldn't want to hard code port in production

/**
 * Environment Variables: Global variables specific to the environment (server)
 * our code is living in. Different servers can have different variable settings,
 * and we can access those values in code. Each server can have their own variable setting
 */