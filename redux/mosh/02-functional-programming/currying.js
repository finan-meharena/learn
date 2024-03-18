let input  = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";


// This is a functional programming approach to the above code

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const wrapInSpan = str => `<span>${str}</span>`
const wrap = (type, inputString) => `<${type}>${inputString}</${type}>`
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));



// two parameters
function add (a, b) {
  return a + b;
}

// single parameter
function add2 (a) {
  return function(b) {
    return a + b;
  }
}