const express = require('express');
const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
  console.log(`Request Url:${req.url}`);
  next();
});

// adding onto the app variable and able to do this because it is passed by reference
htmlController(app);
apiController(app);

app.listen(port);