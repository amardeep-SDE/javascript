const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// methods for concate array
// 1. push - add element at the end, modify the original array
// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] arry inside array
// console.log(marvel_heros[3][2]); // batman

// 2. concat - merge two array, return new array
const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] 

// 3. sprad operator - merge two array, return new array
const another_heros = [...marvel_heros, ...dc_heros];
console.log(another_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// array methods
const another_array = [1,2,3,[4,5,6], 7, [8,9]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// methods -  array.isArray, array.from , array.of
// for data scraping
console.log(Array.isArray("amardeep")); // false
// convert array into string
console.log(Array.from("amardeep")); // [ 'a', 'm', 'a', 'r', 'd', 'e', 'e', 'p' ]

// another ex. Intersting ex
console.log(Array.from({name:"amardeep"})); // [ [Object: null prototype] ] not convert directly give blank array. humein batana padega ki keys se array banayie ya values leke array banayie

let score1 = 200;
let score2 = 300;
let score3 = 400;
console.log(Array.of(score1, score2, score3)); // [ 200, 300, 400 ]

