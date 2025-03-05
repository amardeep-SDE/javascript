// two ways to create object
// 1. literal syntax, not make singleton
// 2. constructor syntax , it make singleton
const myObj1 = {}; // literal syntax ,
const myObj2 = new Object(); // constructor syntax

// in case of key name = "name" same things

const mySym = Symbol("Key1");
const jsUser = {
  name: "amardeep",
  "full name": "amardeep dwivedi",
  //  mySym: "mykey1",
  [mySym]: "mykey1",
  age: 22,
  location: "delhi",
  email: "8qK0I@example.com",
  isLoggedIn: true,
  lastLoginDays: ["monday", "tuesday"],
};
// two ways to access the object
// 1, dot notation
// 2, bracket notation
console.log(jsUser.email); // 8qK0I@example.com
console.log(jsUser["email"]); // 8qK0I@example.com

// full name can't be access by dot notation
// console.log(jsUser.full name); // amardeep dwivedi
console.log(jsUser["full name"]); // amardeep dwivedi

console.log(jsUser[mySym]); // mykey1
// console.log(typeof jsUser.mySym); // string not symbol in case of -  mySym: "mykey1",

// change the value of object
jsUser.email = "hitesh@gmail";
console.log(jsUser.email); // hitesh@gmail

// lock the object
// Object.freeze(jsUser);
jsUser.email = "amar@gmail";
console.log(jsUser.email); // hitesh@gmail
console.log(jsUser); 

// add function in object
jsUser.greeting = function(){
  console.log("hello world");
}
console.log(jsUser.greeting); // [Function (anonymous)] function excute ni hua function ka refrence aya h
console.log(jsUser.greeting()); // hello world


// refer value of object from function
jsUser.greeting = function(){
    console.log(    
      `hello world, my name is ${this.name} and i am ${this.age} years old and my email is ${this.email}`);
  } 
  console.log(jsUser.greeting()); // hello world, my name is amardeep and i am 22 years old and my email is 8qK0I@example.com

  