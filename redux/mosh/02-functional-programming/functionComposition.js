let input  = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";


// This is a functional programming approach to the above code

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));