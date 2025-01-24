//object destructuring

const personOne = {
  name: "John",
  age: 32,
  address: {
    city: "Poland",
    street: "xyz street",
  },
};

const personTwo = {
  name: "Peter",
  age: 27,
  address: {
    city: "New York",
    street: "abc street",
  },
};

// Simple object destructuring
const { name, age } = personTwo;
// console.log(name);
// console.log(age);

//Alias

const { name: FirstName, age: Age } = personOne;
// console.log(FirstName);
// console.log(Age);

// Nested Object Destructuring

const {
  name: Person,
  address: { city },
} = personOne;

// console.log(Person);
// console.log(city);

//Question: Can we use alias name for nested object destructuring?

// Joining Objects

const PersonThree = { ...personOne, ...personTwo };

// console.log(PersonThree);

//If both the objects have the same keys, then the value of the first object will be overridden by the second object

const person1 = { name: "Kylie", age: 28 };
const person2 = { favouriteColor: "green" };

const person3 = { ...person1, ...person2 };
// console.log(person3);
// The above statement will concatenate the two objects, as they have different keys

// Using destructuring in functions - for objects

