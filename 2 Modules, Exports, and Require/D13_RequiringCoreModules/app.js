// you don't use the ./ for core modules
const util = require('util');

const name = 'Mike';
const greeting = util.format('Hello, %s', name);
util.log(greeting); // like console.log but adds timestamp