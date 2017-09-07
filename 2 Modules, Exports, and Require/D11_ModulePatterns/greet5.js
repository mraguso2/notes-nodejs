

const greeting = 'Ello World';

function greet() {
  console.log(greeting);
}

/**
 * only exposing the function, not the greeting variable
 * won't have direct access to variable outside the module
 */

module.exports = {
  greet
}
