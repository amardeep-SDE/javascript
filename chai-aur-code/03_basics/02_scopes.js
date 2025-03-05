
{} // this is called scope

let a = 100;
const b = 200;
var c = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER let a:", a); // 10
    // console.log(a);
    console.log("INNER const b:",b); // 20
    console.log( "INNER var c:",c); // 30
}

console.log("OUTER let a:",a); // 100
console.log("OUTER const b:",b); // 200
console.log("OUTER var c:",c); // 30

// const vs let vs var
// let and const are block scope
// var is function scope

// Scope in window vs scope in node  - imp q

// nested scopes
// child function can access parent function scope but parent function can't access child function scope
function one() {
    const username = "amardeep";
    function two() {
        const website = "amardeep.com";
        console.log(username); // amardeep
        console.log(website); // amardeep.com
    }
    // console.log(website); // undefined, website is not defined
    two();
    
}
one();

// if else
if (true) {
    const username = "amardeep";
    if (username === "amardeep") {
        const website = "amardeep.com";
        console.log(username); // amardeep
        console.log(website); // amardeep.com
    }
    // console.log(website); // undefined, website is not defined
}
// console.log(username);

// intresting example

// console.log(addone(5)); // 6
function addone (num){
    return num + 1;
}
// addone(5);
// console.log(addone(5));


// console.log(addTwo(5)); // TypeError: addTwo is not a function
const addTwo = function (num){
    return num + 2;
}
// addTwo(5);
// console.log(addTwo(5));
