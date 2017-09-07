
// want to use this as the base (the proto)
const person = {
  firstname: '',
  lastname: '',
  greet() {
    return `${this.firstname} ${this.lastname}`;
  }
};

/**
 * Object.create() is another way to setup a prototype chain
 */

const john = Object.create(person); // will have an empty obj john with person as proto
john.firstname = 'John'; // can overwrite them
john.lastname = 'Doe';

const jane = Object.create(person); // will have an empty obj john with person as proto
jane.firstname = 'Jane'; // can overwrite them
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
console.log(john);
console.log(jane);