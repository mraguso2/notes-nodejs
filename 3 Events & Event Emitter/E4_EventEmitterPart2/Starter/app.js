const Emitter = require('events'); // using nodes eventEmitter

// Magic String: a string that has some special meaning in your code
// Bad because easy for a typo to cause a bug
const eventConfig = require('./config').events; // helps avoid Magic Strings


const emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('Hello World from somewhere out there');
});

emtr.on(eventConfig.GREET, function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');

emtr.emit(eventConfig.GREET);
