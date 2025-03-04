let score = "100";

// let score = "amar";
// console.log(typeof score); // string
// let valueInNumber = Number(score);
// console.log(valueInNumber); // NaN
// console.log(typeof valueInNumber); // number

// let score = null;
// console.log(typeof score); // object
// let valueInNumber = Number(score);
// console.log(valueInNumber); // 0
// console.log(typeof valueInNumber); // number

// let score = undefined;
// console.log(typeof score); // undefined
// let valueInNumber = Number(score);
// console.log(valueInNumber); // NaN
// console.log(typeof valueInNumber); // number

// let score = true; 
// console.log(typeof score); // boolean
// let valueInNumber = Number(score);
// console.log(valueInNumber); // 1
// console.log(typeof valueInNumber); // number


// let score = "100abc"; //then it will give NaN
// console.log(typeof score); // string
// let valueInNumber = Number(score);
// console.log(valueInNumber); // NaN
// console.log(typeof valueInNumber); // number


console.log(score);

// console.log(typeof score); // string (null in case of null)
// console.log(typeof (score)); // string

// Convert string to number
// Number() => converts to number
let valueInNumber = Number(score);
console.log(valueInNumber); // 100
console.log(typeof valueInNumber); // number

// summary
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

// let isLoggedIn = true;
let isLoggedIn = 0; // false

// let isLoggedIn = "" // false
// let isLoggedIn = "amar" // true

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// summary
// 0 => false
// 1 => true
// "amar" => true
// "" => false

let someNumber = 50;
let stringNumber = someNumber.toString();
// or let stringNumber = String(someNumber);
// console.log(stringNumber); // "50"
// console.log(typeof stringNumber); // string

// **************************** Operations **************************//

let value = 10;
let negativeValue = -value;
// console.log(negativeValue); // -10

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.666
// console.log(2%3); // 2
// console.log(2+2*3); // 8

let str1 = "hello";
let str2 = "amar";
let result = str1 + " "+ str2;
// console.log(result); // hello amar

// tricky operations
// console.log("1" + 2); // "12"
// console.log(1 + "2"); // "12"
// console.log("1"+ "2"); // "12"
// console.log("1" + 2 + 3); // "123"
// console.log(1 + 2 + "3"); // 33



console.log(true); // true

// this type of code is not recommended
// console.log(3+4+6*8%3); 
// console.log(+true); // 1
// console.log(+""); // 0
// let num1 , num2, num3;
// num1 = num2 = num3 = 10;
//**************************** */

let gameCounter = 100;
gameCounter++; // gameCounter = gameCounter + 1;
// console.log(gameCounter); // 101
++gameCounter; // gameCounter = gameCounter + 1;
// console.log(gameCounter); // 102

gameCounter--; // gameCounter = gameCounter - 1;
// console.log(gameCounter); // 100
--gameCounter; // gameCounter = gameCounter - 1;
