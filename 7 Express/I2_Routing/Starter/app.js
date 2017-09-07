const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

// variable in route, id __ you can pull data out of url
app.get('/person/:id', (req, res) => {
  res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.get('/api', (req, res) => {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.get('/products/:productId', (req, res) => {
  res.json({ productId: `${req.params.productId}` });
});

app.listen(port);