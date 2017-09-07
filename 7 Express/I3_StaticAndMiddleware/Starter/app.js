/**
 * Middleware: code that sits between two layers of software
 *   In the case of Exress, sitting between the request and the response
 */

/**
 * Static: Not Dynamic
 *   Files that are not process by code in any way. For example
 *   HTML, CSS and image files are 'static' file
 *
 * Still need to deliver these types of files when they are requested by
 * an HTTP request. Remember the request doesn't just somehow connect to the
 * file. We are just getting the request and the server has to decide what to do with it
 */

// public Folder: typically holds static files

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// Use middelware to ensure that css file is downloaded when requested by HTTP req
/**
 * If request comes in with /assets/somefile, use middleware to go into the
 * public folder, and find that somefile and send it back
 */
app.use('/assets', express.static(`${__dirname}/public`));

/**
 * You can make your own middleware. When route hits, execute fn
 */
app.use('/', (req, res, next) => {
  console.log(`Request Url: ${req.url}`);
  next(); // all this means is run the next middleware {get methods below are like middleware}
});

app.get('/', (req, res) => {
  // will request the css file from the server. Server will see /assests and use middleware
  res.send('<html><head><link href="assets/style.css" rel="stylesheet"/></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', (req, res) => {
  res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.get('/api', (req, res) => {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);