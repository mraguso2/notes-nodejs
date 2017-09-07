const greetings = require('./greetings.json');

function greet() {
  console.log(greetings.it);
}

module.exports = greet;