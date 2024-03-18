const numbers = [1, 2, 3];

// Adding
const added = [...numbers, 4];
console.log(added);

// Adding at the beginning
const addedAtBeginning = [0, ...numbers];
console.log(addedAtBeginning);

// Removing
const removed = numbers.filter(n => n !== 2);
// filter in javascript returns a new array with all elements that pass the test implemented by the provided function

// updating
const updated = numbers.map(n => (n === 2 ? 20 : n));
