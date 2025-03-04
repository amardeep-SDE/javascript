"use strict"; // treat all JS code as newer version

// alert(3+3)  refrenece error: alert is not defined ( we are using node.js , not browser)  

/* window.alert("Hello world!");
alert("Hello world!"); use in browser
*/

console.log(3+3) // 6

// Data Types
// 1. Primitive data types: number, string, boolean, null, undefined, symbol
// 2. Reference data types: arrays, objects

let name = "Amar";
let age = 25;
let isLoggedIn = true;

//1. permitive data types

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// undefined vs null 

// let myVar = undefined; value is not assigned 
// let myVar = null; stand alone value

console.log(typeof "amar"); // string
console.log(typeof 25); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof Symbol("amar")); // symbol


// Reference data types
// Arrays
// Objects  => key value pair   { key: value }
// Functions
// Dates
// Others