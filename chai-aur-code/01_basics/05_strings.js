const name = "amardeep";
const repoCount = 50;

console.log(typeof name); // string

// this is normal way to concatinate string
console.log(name + " " + repoCount + " "+ "value"); // amardeep 50

// use string interpolation using bacticks
// this is the best way to concatinate string , morden way, more readable
console.log(`hello my name is ${name.toUpperCase()} and i have ${repoCount} repos`); // hello my name is amardeep and i have 50 repos

// another way to create string
const gameName = new String("amardeep-sde");
console.log(typeof gameName); // object , here type of string is object bcz delecare with new keyword

console.log(gameName[0]); // a
console.log(gameName.__proto__); // [object String]

console.log(gameName.length); // 8

console.log(gameName.toUpperCase()); // AMARDEEP

console.log(gameName.charAt(2)); // a

console.log(gameName.indexOf("a")); // 0     0 based indexing   

const newString = gameName.substring(0,4); // amar, negative value is not allowed
console.log(newString); // amar

// const anotherString = gameName.slice(0,4); // amar
// console.log(anotherString); // amar

const anotherString = gameName.slice(-3); // sde
console.log(anotherString); // sde

const newStringOne = "       amardeep    ";
console.log(newStringOne); //       amardeep    
console.log(newStringOne.trim()); // amardeep , with trim space will be removed

// const url = "https://amardeep.com/amardeep-sde";
// console.log(url.includes("amardeep")); // true  // check url contains amardeep or not

const url = "https://amardeep.com/amardeep%20sde";

url.replace("%20", "-");
console.log(url); // https://amardeep.com/ amardeep-sde

console.log(url.includes("dwivedi") ) 


// split - convert string into array
const myName = "amar-deep-dwi";
console.log(myName.split("-")); // [ 'amar', 'deep' , 'dwi' ]


