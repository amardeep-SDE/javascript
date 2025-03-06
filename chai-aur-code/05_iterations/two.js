// While loop
// while (condition) {
//     // code to be executed
//     // increment/decrement
// }

let index = 0;
while (index <= 10) {
    // console.log(`value of index is: ${index}`);
    // index++;
    index = index+2
}

// Array iteration

let myArray = ["flash", "batman", "superman", "ironman"];

let arr = 0;
while(index < myArray.length) {
    // console.log(`value of index is: ${myArray[arr]}`);
    arr++;
    
}

// do while loop - it will execute the code at least once
let score = 11;
do {
    console.log(`score is: ${score}`);
    score++;
} while (score <= 10);
