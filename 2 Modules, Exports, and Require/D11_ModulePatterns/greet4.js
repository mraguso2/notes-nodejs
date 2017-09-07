function Greetr() {
  this.greeting = 'Hello World!!!';
  this.greet = function() {
    console.log(this.greeting);
  }
}
// give back in the module the ability to make new objects
module.exports = Greetr;