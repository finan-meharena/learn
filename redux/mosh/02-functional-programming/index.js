function sayHello() {
  console.log('Hello')
}

let fn = sayHello;
fn(); // Hello
sayHello(); // Hello


function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello); // Hello

function sayHello() {
  return function() {
    console.log('Hello');
  }
}
