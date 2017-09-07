const fs = require('fs');

/** dealing with files on os - reading binary data
 * It is looking at the file, reading the binary data and then
 * use the chara encoding to determine what those 0's and 1's mean_
 * what do they map to
 */
const greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8'); // synchronous
console.log(greet);

// Error-First Callback: callbacks that take an error object as their first parameter
// null if no error, otherwise will contain an object defining the error.
// this is a standard so we know in what order to place our parameters in our callbacks

// function callback will be invoked once you get data back
const greet2 = fs.readFile(`${__dirname}/greet.txt`, 'utf8', (err, data) => {
  console.log(data);
}); // asynchronous

// node sticks data from buffer in memory on the "heap"

const pizzas = fs.readFile(`${__dirname}/pizza.txt`, 'utf8', ((err, data) => {
  console.log(`pizzas: ${data}`);
}));