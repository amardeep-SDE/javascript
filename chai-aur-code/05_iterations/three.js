// Array specific Loops


const arr = [1,2,3,4,5];
// 1. for of

// for (const element of object) {  
// }
for (let item of arr) {
    // console.log(item);
}

// for loop in strings
const greetings = "namste duniya";

for (let char of greetings) {
    // console.log(char);
}

// Map - key value pair, key is unique, value can be duplicate, key can be of any data type.
const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // it will override the previous value/key pair 

for (let key of map.keys()) {
    console.log(key);
}
for (const [key, value] of map.entries()) {
    console.log(key, value);
}
//or
for (const [key, value] of map) {
    console.log(key, value);
}

// for of loop in objects

const myObject = {
    "game1": "NFS",
    "game2": "Fifa",
}

// myObject in not itterable
for (const [key, value] of myObject) {
    console.log(key, value);    
}

