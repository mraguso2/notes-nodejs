
// mutate exports object will not replace the object/break the chain
exports.greet = function() {
  console.log('Hola World');
}

console.log(exports);
console.log(module.exports);

// TL:DR just use module.exports