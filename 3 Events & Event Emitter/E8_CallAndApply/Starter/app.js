const obj = {
  name: 'Mike Rags',
  greet() {
    console.log(`Hello ${this.name}`);
  }
};

obj.greet();
obj.greet.call({ name: 'Jane Doe' }); // first arg will overwrite the this keyword
obj.greet.apply({ name: 'Jane Doe' });

const obj2 = {
  breakfast: 'cereal',
  order(drink) {
    console.log(`I had ${this.breakfast} with ${drink} this morning`);
  }
};

obj2.order.call(obj2, 'beer'); // first arg will overwrite the this keyword
