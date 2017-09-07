/**
 * Template Engines take care of dynamically generating HTML on the fly
 */

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

// By default, will look for static files (views) inside the views folder
app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
  console.log(`Request Url: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  // render will go to wherever you set the views to (views folder by default)
  // will look for file of name you give it plus file extension from app.set view engine
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  // will look for person file in views and give the ID variable to the ejs file
  res.render('person', { ID: req.params.id });
});

app.get('/product/:prodId', (req, res) => {
  res.render('product', { prodID: req.params.prodId });
});

app.get('/api', (req, res) => {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);