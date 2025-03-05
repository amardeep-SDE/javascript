const score = 400;
console.log(score);


 const balance = new Number(100);
 console.log(balance); // [Number: 100]

 console.log(balance.toString); // [Function: toString]
 
 console.log(balance.toString().length); // 3
 console.log(balance.toFixed(2)); // 100.00

 const otherNumber = 23.566778

 console.log(otherNumber.toPrecision(4)); // 23.57

 const hundreds = 1000000;

 // by default locale is en-US
 console.log(hundreds.toLocaleString()); // 1,000,000
 // in indian format
 console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000

//  console.log(typeof Number.MAX_VALUE); // number
//  console.log(typeof Number.MIN_VALUE); // number
//  console.log(typeof Number.MAX_SAFE_INTEGER); // number
//  console.log(typeof Number.MIN_SAFE_INTEGER); // number

 // ********************** maths **********************

 console.log(Math); // [Object: null prototype] {} 

//  console.log(Math.abs(-4)); // 4 abs = absolute value
//  console.log(Math.round(4.3)); // 4 choose nearest value
//  console.log(Math.ceil(4.3)); // 5 choose top value
//  console.log(Math.floor(4.9)); // 4 choose bottom value
//  console.log(Math.min(3,4,5,6,7)); // 3
//  console.log(Math.max(3,4,5,6,7)); // 7

 // mostly used for random numbers
 console.log(Math.random()); // 0.123456789 // always between 0 to 1

 console.log(Math.random() * 10); // 0 to 9 
 console.log((Math.random() * 10) + 1); // 1 to 10

 // random number between 10 to 20
 const min = 10;
 const max = 20;


 console.log(Math.floor(Math.random() * (max - min + 1)) + min); // number between 10 to 20 , math.floor is used to round off the number
 

 