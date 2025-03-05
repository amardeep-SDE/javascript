const tinderUser = new Object(); // object literal syntax, singleton object
console.log(tinderUser); // {}

const tinderUser1 = {}; // object literal syntax
console.log(tinderUser1); // {}

tinderUser.id = "123abc";
tinderUser.name = "amardeep";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "8qK0I@example.com",
    fullName: {
        userFullName: {
            firstName: "amardeep",
            lastName: "dwivedi",
        },
    },
}
// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName?.userFullName.firstName); // ? optional chaining 

// concate or merge two object

// sprad operator
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3  = {obj1, obj2}; another way to concate
// Object.assign({}, obj1, obj2); // {} it is target object

const obj3 = {...obj1, ...obj2};
console.log(obj3);

// value from database
const users = [
    {userId: 1, email: "8qK0I@example.com", name: "amar"},
    {userId: 2, email: "8qK0I@example.com", name: "deep"},
    {userId: 3, email: "8qK0I@example.com", name: "qwe"},
]

console.log(users[1].name);
console.log(tinderUser);

// proprties of object

// keys
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] return array ( loop laga ke array mein ab iska use kar sakte h jab db se data ata h tab)
// console.log( typeof (Object.keys(tinderUser)));

// values
console.log(Object.values(tinderUser)); // [ '123abc', 'amardeep', false ]

// entries
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'amardeep' ], [ 'isLoggedIn', false ] ]

// check value is present or not
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true   

// destructuring

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "amardeep",
}

// normal way to access the object values
// course.courseInstructor 
// course.courseName
// course.price

// destructuring , its nothing only synstical sugar
const { courseInstructor: instructor, courseName, price } = course;
console.log(instructor, courseName, price);

// note - array ko v destructure kiya ja sakta h but bahut kam use hota hai

// JSON - java script object notation - key v string mein likha jata h object mein by default raheta h
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]