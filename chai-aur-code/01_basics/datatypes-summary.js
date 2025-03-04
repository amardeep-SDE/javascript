// data types
//  1. premative data types - call by value
//  2. reference data types - call by reference

// 1. premative data types - call by value - 7 types
// 1. Number 2. String 3. Boolean 4. null 5. undefined  6. symbols 7. BigInt

// 2. reference data types (non-primitive) - call by reference - 3 types
// 1. Arrays 2. Objects 3. Functions

// const score = 100; javascript
// const score: number = 100; typescript

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // unique value
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigIntValue = 12345678978901234567890n
// console.log(bigIntValue); // bigint gennerally used for large number

// reference data types or non-primitive data types
// 1. Arrays
const hero = ['superman', 'shalaman', 'spiderman']
console.log(hero);

// 2. Objects
const person = {
    name: 'john',
    age: 30,
    x: function () {
        console.log('x');
    }
}
console.log(person);

// 3. Functions
const myFunction = function () {
    console.log('Namste Duniya');
}
console.log(myFunction());

// how to find data types in javascript
console.log(typeof bigIntValue); // bigint
console.log(typeof person); // object   
console.log(typeof myFunction); // function (function object)
console.log(typeof score); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof id); // symbol
console.log(typeof Symbol()); // symbol


// jitne bhi refrerence data types hote hai unka typeof object hota hai
// null ka typeof object hota hai, ye ek bug hai javascript ka
// null ka typeof object nahi hona chahiye, null ka typeof null hona chahiye    

// types of memory in javascript


// 1. stack memory - primitive data types , imuatable data types (call by value)
// 2. heap memory - reference data types, mutable data types (call by reference)

let myYoutubename = "hitesh chaudhary";
let anothername = myYoutubename;

anothername = "chai aur code";
console.log(anothername); // change the value of anothername
console.log(myYoutubename); // value of myYoutubename will not change because it is call by value (premative data types)
// change the copy of value not the original value in case of premative data types (stack memory) thats  y change in anothername will not affect myYoutubename 

// imutable data types - premative data types
// mutable data types - reference data types

let userOne = {
    email: "dG1oq@example.com",
    upi: "dG1oq@upi"
}
let userTwo = userOne;
userTwo.email = "hitesh@gmail";
console.log(userOne.email); // hitesh@gmail // change the value of userOne.email because it is call by reference (reference data types)
console.log(userTwo.email); // hitesh@gmail 

// in this case change in userTwo will affect userOne because it is call by reference (reference data types) (heap memory)
// change the original value in case of reference data types (heap memory) thats  y change in userTwo will affect userOne

// summary
// 1. premative data types - call by value - stack memory
// 2. reference data types - call by reference - heap memory