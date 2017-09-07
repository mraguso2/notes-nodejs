const EventEmitter = require('events');
const util = require('util');

// fn constructor adding one property to an obj created from it
function Greetr() {
  this.greeting = 'Hello World';
}

// any objs created by Greetr would have access to EventEmitter props and methods
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  // will go down prototype chain to find the emit method
  this.emit('greet', data); // **** will pass parameters to listener ****
};

const greeter1 = new Greetr();

// will go down prototype chain to find the on method
greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});

greeter1.greet('Mike');

Greetr.prototype.purchase = function(data) {
  console.log(`You just bought: ${data}`);
  this.emit('purchase', data);
};

greeter1.on('purchase', function(data) {
  console.log(`Recent Purchase Just Made:: ${data}`);
});

greeter1.purchase('Toaster Oven');
