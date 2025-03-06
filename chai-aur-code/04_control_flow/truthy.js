// const userEmail = "amar@gmail.com"; // truthy value direct check without compare

const userEmail = [];
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
// string ke andar koi bhi value hai wo truthy value hota hai

// empty array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// empty object
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coalescing operator (??) : null or undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 5 ?? 10;
console.log(val1);

// Ternary operator  - short hand if else
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Iced tea is expensive") : console.log("Iced tea is cheap");

// summary

// if (condition) {
//     // code to run if condition is true
// } else {
//     // code to run if condition is false
// } 

// condition ? code to run if condition is true : code to run if condition is false