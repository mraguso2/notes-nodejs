const greet = require('./greet');

// will look for greet.js -- cant find it and then look for a greet folder
// and index.js within that folder
// will return module.exports which will be an object

// english property on greet object
greet.english();
greet.spanish();
greet.italian();