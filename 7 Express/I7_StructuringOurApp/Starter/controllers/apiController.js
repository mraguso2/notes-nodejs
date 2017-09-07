const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

module.exports = function (app) {
  app.get('/api/person/:id', (req, res) => {
    // get that data from database
    res.json({ firstname: 'John', lastname: 'Doe' });
  });

  app.post('/api/person', jsonParser, (req, res) => {
    // save to the database
  });

  app.delete('/api/person/:id', (req, res) => {
    // delete from the database
  });
};