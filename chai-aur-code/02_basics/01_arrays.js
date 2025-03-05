const myArr = [0, 1, 2, 3, 4, 5]; // index 0, 1, 2, 3, 4, 5

// properties of array
// 0 based indexing 
// shallow copy - copy by reference
// deep copy - copy by value

// 1. length
console.log(myArr.length); // 6

const myHeores = ["shaktiman", "naagraj", "doga"];
const myArr2 = new Array(1,2,3,4); // another way to create array
console.log(myArr[2]); // 2

// Array methods

// 1. push - add element at the end
myArr.push(6);
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

// 2. pop - remove element from the end
myArr.pop();
console.log(myArr); // [0, 1, 2, 3, 4, 5]

// 3. shift - remove first element
myArr.shift();
console.log(myArr); // [1, 2, 3, 4, 5]

// 4. unshift - add element at the start
myArr.unshift(7); 
console.log(myArr); // [7, 1, 2, 3, 4, 5]

// 5. includes - check if element is present in the array
console.log(myArr.includes(7)); // true

// 6. indexOf - return the index of the element
console.log(myArr.indexOf(7)); // 0

// 7. join - convert array into string
// change the type of array
const newArr = myArr.join();

console.log(myArr); // [7, 1, 2, 3, 4, 5]
console.log(newArr); // 7,1,2,3,4,5 , convert array into string

console.log("A", myArr); // A [7, 1, 2, 3, 4, 5]


// 8. slice - create a new array
const myArr3 = myArr.slice(1, 3); // start index , end index, not include end index
console.log(myArr3); // [1, 2]
console.log(myArr); // [7, 1, 2, 3, 4, 5]

// 9. splice - remove element from the array
myArr.splice(1, 3); // start index , no of element to be removed
console.log(myArr); // [7, 4, 5]     1, 2, 3 are removed

// slice vs splice
// slice - create a new array
// splice - remove element from the array, make changes in the original array



