// function - block of code which performs a task or calculate something and return a value (optional) 

// console.log("H");
// console.log("I");
// console.log("J");

function sayMyName () {
    console.log("H");
    console.log("I");
    console.log("J");
}
sayMyName // function ka refrence aya h
// sayMyName(); // function excution
// console.log(sayMyName());

//examples
// function addTwoNumbers (num1, num2) {
//     console.log(num1 + num2);
    
//     return num1 + num2;
// }
// console.log(addTwoNumbers(3, 5)); // 8
// console.log(addTwoNumbers(3, "4")); // NaN 34

// parameters vs arguments - parameters are variable name , arguments are actual value passed to the function 


// way to pass parameters in function
// 1.
function addTwoNumbers (num1, num2) {
    
    // let result = num1 + num2;
    // return result;
    // or
    return num1 + num2;
}
const result = addTwoNumbers(3, 5);
// console.log(result);

// 2.
function loginUserMessage (userName = "sachin") {

    if (!userName) {
        console.log("Please enter username");
        return;
    }
    
    return `${userName} just logged in`;
}
// loginUserMessage("Amar"); 
// console.log(loginUserMessage());
// console.log(loginUserMessage("Amar"));
console.log(loginUserMessage()); // undefined

// 3. ex shopping card ka
// REST Operator
function calculateCartPrice (...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 1000));

// or
// function calculateCartPrice (val1, val2, ...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 1000));


// 4. object in function

const user = {
    userName: "amardeep",
    price: 199,
}

function handleObject(anyObject) {
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`);

    return anyObject;
}

// handleObject(user);
// console.log(handleObject(user));
// jab bhi return hoga function se use console karna padega tab hi output ayega or ya kisi variable mein store karke fir console kara sakte h 
// const  userData = handleObject(user);
// console.log(userData);


handleObject(user);
// or
handleObject({
    userName: "amardeep",
    price: 199,
})

// 5.Array in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
// or
console.log(returnSecondValue([200, 400, 100, 600]));
