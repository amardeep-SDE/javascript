// if

// const isUserloggedIn = true;

const temperature = 41;

if (temperature > 50) {
    console.log("it's a hot day");
    
} else {
    console.log("it's not a hot day");
}

// console.log("temperature is greater than 50");


if (2 === "2") {
    console.log("condition is true");
    
}

// < , > , <= , >= , == , != , === , !==

// SCOPE
const score = 200;

if (score > 100) {
    let power = "fly"; // let is block scope
    // var power = "fly"; // var is function scope 

    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // undefined with let and const 

// short hand notation

const balance = 1000;;

// if (balance > 500) console.log("test");

// Nesting if else 

// if (balance > 500) {
//     console.log("test");
//     if (balance > 1000) {
//         console.log("test2");
//     }
// }


if (balance > 500) {
    console.log("test");
} else if (balance > 1000) {
    console.log("test2");
} else if (balance > 5000) {
    console.log("test3");
} else {
    console.log("test4");
}

// real life example
// check multiple conditions

const isUserloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

 // && check both conditions are true
if (isUserloggedIn && debitCard) {
    console.log("Allow to buy course");
} 
 // || check any one condition is true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}