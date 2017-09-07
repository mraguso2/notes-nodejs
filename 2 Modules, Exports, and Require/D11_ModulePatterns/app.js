// require returns module.exports object

const greet = require('./greet1');
greet();

// pattern 2 - reaching into the returned module exports and setting variable equal to a property
const greet2 = require('./greet2').greet;
greet2();

// pattern 3
/**
 * require caches the results of the require function for any particular
 * filename. Will return cached module.exports if called again
 */
const greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'changed hello world!';

const greet3b = require('./greet3'); // ends up being the same obj as greet3 - cached
// greet3 and greet3b are pointing to the same object
greet3b.greet(); // 'changed hello world!'

// pattern 4
const Greet4 = require('./greet4');
const grtr = new Greet4(); // creating new object here instead of module
// now able to keep making new objects - won't point to just one object
grtr.greet();

/** Pattern 5 - very popular
 * Revealing Module Pattern: exposing only the properties and methods
 * you want via an return object. Won't have direct access to some variable in
 * the module
 */
const greet5 = require('./greet5').greet;
greet5();