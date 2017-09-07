/**
 * REST: an architectual style for building APIs
 *   'Representational State Transfer'. We decide that HTTP verbs
 *   and URLS mean something
 *
 *   Typically uses json data
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
  console.log(`Request Url:${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, (req, res) => {
  res.send('Thank you!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

// below is an idea from a restful API
// routes plus HTTP verbs appear inituitive

app.get('/api/person/:id', (req, res) => {
  // get that data from database
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.post('/api/person', jsonParser, (req, res) => {
  // save to the database
});

app.delete('/api/person/:id', jsonParser, (req, res) => {
  // delete from the database
});

// ****
app.listen(port);