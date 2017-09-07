/**
 * Callback: a function passed to some other function,
 * which we assume will be called at some point
 */

function greet(callback) {
  console.log('Hello');
  const data = {
    name: 'Mike Rags'
  };

  callback(data);
}

greet((data) => {
  console.log('A callback was invoked!');
  console.log(data);
});

greet((data) => {
  console.log('A different callback was invoked!');
  console.log(data.name);
});