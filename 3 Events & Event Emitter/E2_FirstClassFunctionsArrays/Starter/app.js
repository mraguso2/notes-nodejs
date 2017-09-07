// Event: something that has happened in our app that we can respond to

/**
 * Two different types of events
 *
 * 1. System Events - C++ Core library (libuv): events coming from the computer system
 * ex: finished reading a file, file is open, received data from internet
 * things that js doesn't have
 *
 * 2. Custom Events - javascript core: events you can create yourself
 * Event Emitter
 *
 */

 // object properties and methods
const obj = {
  greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);
const prop = 'greet';
console.log(obj[prop]);

// function and arrays
const arr = [];

arr.push(() => {
  console.log('Hello World 1');
});
arr.push(() => {
  console.log('Hello World 2');
});
arr.push(() => {
  console.log('Hello World 3');
});

arr.map(fn => fn());