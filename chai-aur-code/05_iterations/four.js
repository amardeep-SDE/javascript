// for in looops - object specific

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

for (let key in myObject) {
    // console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop in arrays

const programming = ["js", "cpp", "py", "rb", "java"];

for (let key in programming) {
    // console.log(key); // give only index or key
    // console.log(`${key} shortcut is for ${programming[key]}`);
}

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // it will override the previous value/key pair 

for (let key in map) {
    console.log(key); // not iterable here
}
