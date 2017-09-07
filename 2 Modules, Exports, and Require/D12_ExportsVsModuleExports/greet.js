// exports and module.exports equal same object by reference

// here we break the chain by setting exports "=" to something else
exports = function() {
  console.log('Hello');
}

// but require returns module.exports
console.log(exports);
console.log(module.exports);

// can't overrite exports -- don't want to break the by reference chain