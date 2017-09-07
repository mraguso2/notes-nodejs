const EventEmitter = require('events');
const util = require('util');

function Greetr() {
	/**
	 * Run the EventEmitter function constructor and rewrite the this being used
	 * to the new this being created so we capture props and methods that would have
	 * been created on new EventEmitters See ++
	 */
  EventEmitter.call(this); // like es6 super()

  // the this keyword is the new object being created
  this.greeting = 'Hello world!';
}

// important line, creating prototype chain
// ++ this line below will capture all of the EventEmmitter prototype props & methods
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet');
};

let greeter1 = new Greetr();

greeter1.on('greet', function() {
  console.log('Someone greeted!');
});

greeter1.greet();