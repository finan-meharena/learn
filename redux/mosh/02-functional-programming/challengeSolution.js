// 1. Solution
const getTag = input => input.tag;
const toLowerCs = input => input.toLowerCase();
const convert = loweredTag => `"(${loweredTag})"`;

const tagExample = { tag: 'JAVASCRIPT' };

console.log(convert(toLowerCs(getTag(tagExample)))); // "(javascript)"

// 2. Solution
// Assuming that this object is immutable, write code to

const recipe ={
    name : "Spaghetti Bolognese",
    ingredients: ["egg", "salt"]
}

// code to add a new ingredient ("cream")
const creamAdded = {
    ...recipe,
    ingredients: [...recipe.ingredients, "cream"]
}
console.log(creamAdded);

// code to replace "egg" with "egg white"
const eggReplaced = {
    ...recipe,
    ingredients: recipe.ingredients.map(item => item === "egg" ? "egg white" : item)
}
console.log(eggReplaced);

// code to remove an ingredient ("egg")
const eggRemoved  = {
    ...recipe,
    ingredients: recipe.ingredients.filter(item  => item !== "egg")
}
console.log(eggRemoved);