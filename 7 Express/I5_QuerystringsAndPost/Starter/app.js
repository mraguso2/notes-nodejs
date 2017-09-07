/**
 * It's important to understand the HTTP req, querystring and post parameters because
 * we are handling the request on the server
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
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

// you can have multiple callbacks on this middleware, urlencodedParser will run b4 arrow fn
app.post('/person', urlencodedParser, (req, res) => {
  res.send('Thank you!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, (req, res) => {
  res.send('Thank you for the JSON data!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.get('/api', (req, res) => {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);