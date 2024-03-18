// pure function is a function that returns a value that is computed based on its input arguments
// example of a pure function is Math.abs(-1)
// example of a non-pure functions are Date.now() and Math.random()


// Immutablity


const person = { name: 'John', age: 20};
const updated = Object.assign({}, person, { name: 'Bob', age: 30 });
console.log(updated);


// alternative to Object.assign (spread operator)
const updatedPerson = {...person, name : "Finan"}
console.log(updatedPerson);


// shallow copy
const anotherPerson = {
    name: 'John',
    address: {
        country: 'USA',
        city: 'San Francisco'
    }
}

const updateAnotherPerson = {...anotherPerson, name : "Meharena"}
updateAnotherPerson.address.city = 'New York';

console.log(anotherPerson);
console.log(updateAnotherPerson);