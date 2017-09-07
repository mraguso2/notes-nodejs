// Your Javascript Code Goes Here

//function statement
function greet() {
    console.log('hi');
}

greet();

//functions are first class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi Mike');
}

greetMe();

//it's first class
logGreeting(greetMe);

//Use a function expression on the fly
logGreeting(function() {
    console.log('Hello Mike!!');
});