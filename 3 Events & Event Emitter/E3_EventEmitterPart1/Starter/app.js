// Built our own event emitter

const Emitter = require('./emitter');

const emtr = new Emitter();

// greet will become a property name/ type of event
emtr.on('greet', function() {
  console.log('Hello World from somewhere out there');
});

// adds listener to the greet property
emtr.on('greet', function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
// emit will find property and loop through the array
emtr.emit('greet'); // we emit/trigger the event

emtr.on('alert', function() {
  console.log('ahh, there has been an alert');
});
console.log('Alert!');
emtr.emit('alert');
