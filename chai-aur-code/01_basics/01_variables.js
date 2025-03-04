const accountId = 12345;
let accountEmail = "G0l0m@example.com";
var accountPassword = "12345";
accountCity = "Bhopal"; // this is not good practice
// accountId = 2; // Error: Assignment to constant variable. (Not allowed)

let accountState;

accountEmail = "amar@gmail.com";
accountPassword = "123321";
accountCity = "Indore";

// console.log(accountId); 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.table({ accountId, accountEmail, accountPassword, accountCity, accountState });

// var not use in modern JS code because it has function scope.
// let and const have block scope.