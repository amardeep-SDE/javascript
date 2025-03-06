// Map - return new array 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// add 10 in all index

// const newNums = myNumbers.map( (num) => num + 10);
// or
const newNums = myNumbers.map( (num) => {return num + 10});
//. jab bhi scope {} ye use karenge return keyword likhna padega otherwise console mein undefined ayega
console.log(newNums);


// chainning , use multiple functions

const newNums1 = myNumbers
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter( (num) => num > 40);
console.log(newNums1);