const greet = require('./greet');

greet();

/*
 * require is a function, that you pass a "path" to
 * module.exports is what the requre function returns
 * this works because your code is actually wrapped in a function
 * that is given these things as function parameters
*/

// what you write is actually the body of a function