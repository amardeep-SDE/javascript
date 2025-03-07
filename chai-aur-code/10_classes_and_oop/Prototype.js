let myName = "amardeep  ";
console.log(myName.length); // 8

// console.log(myName.truelength); // undefined

let myHeros = ["thor", "spiderman", "ironman"];

let heroPower = {
    thor: "thunder",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spiderman power is ${this.spiderman}`);
        
    }
}
Object.prototype.amardeep = function() {
    console.log(`amardeep is present in all objects`);
    
}

Array.prototype.heyAmardeep = function() {
    console.log(`hey amardeep`);
    
}

heroPower.amardeep(); // amardeep is present in all objects
myHeros.amardeep(); // amardeep is present in all objects

myHeros.heyAmardeep(); // hey amardeep
// heroPower.heyAmardeep(); 

// Inheritance

const User = {
    name: "amardeep",
    email: "8qK0I@example.com",
}

const Teacher = {
    makeVedio: true
}
const TeachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: 'JS course',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User; // Teacher is child of user
TASupport.__proto__ = Teacher; // TASupport is child of Teacher

// Mordern syntax
Object.setPrototypeOf(TASupport, Teacher);


let anotherUsername = "amardeep";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()