// this context 
const user = {
    userName: "amardeep",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.userName} , welcome to website`);
        console.log(this); // user{}
        
    }
}

user.welcomeMessage();
user.userName = "sachin";
user.welcomeMessage();

console.log(this); // window object / empty object {}
// this refer for empty object {} bcz its node environment
// value of this in browser is window object {}

// 1. normal function

// function chai() {
//     let userName = "amardeep";
//     console.log(this.userName); // undefined 
// }
// chai();

// 2. function expression

// const chai = function () {
//     let userName = "amardeep";
//     console.log(this.userName); // undefined 
// }
// chai();

// 3. arrow function
const chai = () => {
    let userName = "amardeep";
    console.log(this); // undefined 
    // this not work in arrow function
}
chai();

// pure arrow functions

// 1. basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 5));

// const addTwo = (num1, num2) =>  num1 + num2; // implicit return
// const addTwo = (num1, num2) =>  (num1 + num2); // implicit return
// const addTwo = (num1, num2) =>  {num1 + num2}; // implicit return
// () not required return keyword
// {} required return keyword

// console.log(addTwo(3, 5));

// written object then use {} 
const addTwo = (num1, num2) =>  ({userName: "amardeep"});
// console.log(addTwo(3, 5));

