// immediately invoked function expression - iife
// global scope ke polution nhi hoga
// ()()
(function chai() { // named iife
    console.log("DB connected");
})();
// chai();
// or
( (name) => { // unnamed iife
    console.log(`DB connected ${name}`);
}) ("amardeep"); // same as chai("amardeep");