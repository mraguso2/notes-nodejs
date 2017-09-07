
const EventEmitter = require('events');

class Greetr extends EventEmitter {
  constructor() {
    super(); // EventEmitter.call(this);
    this.greeting = 'Hello world!';
  }

  greet(data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit('greet', data);
  }
}

module.exports = Greetr;