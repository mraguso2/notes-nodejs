function Emitter() {
  this.events = {};
}

// event listener: the code that responds to an event {i.e.: a function}
// you can have many listeners listening to an event
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].map(fn => fn());
  }
}

module.exports = Emitter;