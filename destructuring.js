const alphabets = [`A`, `B`, `C`, `D`];
const numbers = [`1`, `2`, `3`, `4`];

// before es6

// const a = alphabets[0];
// const b = alphabets[1];
// console.log(a);
// console.log(b);

// after es6
const [a, b] = alphabets;
// console.log(a);
// console.log(b);

// skip an element
const [a1, , c1] = alphabets;
// console.log(a1);
// console.log(c1);

// rest operator

const [a2, b2, ...rest] = alphabets;
// console.log(a1);
// console.log(b2);
// console.log(rest);

// concatenate arrays - before es6

const newArray = alphabets.concat(numbers);
// console.log(newArray);

// concatenate arrays - after es6
const newArray2 = [...alphabets, ...numbers];
// console.log(newArray2);

//When dealing with functions

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, multiply] = sumAndMultiply(2, 3);
// console.log(`sum ${sum}`);
// console.log(`multiply ${multiply}`);

//Optional return value in function - can set default value for that

const [sum1, multiply1, division = "No division"] = sumAndMultiply(2, 3);

console.log(`sum ${sum1}`);
console.log(`multiply ${multiply1}`);
console.log(`division ${division}`);
