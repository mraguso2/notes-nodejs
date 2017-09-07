const util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function() {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
};

function Policeman() {
  Person.call(this); // need to run the Person constructor with new object made
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
const officer = new Policeman();
officer.greet();

// using es6 classes

class Person2 {
  constructor(name) {
    this.firstname = name;
  }
}

class Policeman2 extends Person2 {
  constructor(name) {
    super(name);
    this.division = '123';
  }
}

const nypd = new Policeman2('MIke');
console.log(nypd);