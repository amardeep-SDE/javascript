let myDate = new Date();
console.log(myDate); // current date and time
// console.log(myDate.getTime()); // current date and time in milliseconds
// console.log(myDate.getFullYear()); // current year
// console.log(myDate.getMonth()); // current month
// console.log(myDate.getDate()); // current date
// console.log(myDate.getDay()); // current day of the week

console.log(myDate.toISOString()); // current date and time

console.log(myDate.toLocaleString()); // current date and time
console.log(myDate.toLocaleDateString()); // current date
console.log(myDate.toLocaleTimeString()); // current time

console.log(typeof myDate); // object


let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // current date and time

let myCreatedDate2 = new Date("05-03-2024");
console.log(myCreatedDate2.toLocaleString()); // current date and time

let myCreatedDate3 = new Date("may 03 2024");
console.log(myCreatedDate3.toLocaleString()); // current date and time  

let myTimeStamp = Date.now();
console.log(myTimeStamp); // current date and time in milliseconds

console.log(myCreatedDate.getTime()); // current date and time in milliseconds

//convert in to second
console.log(Math.floor(Date.now() / 1000));

// convert in to minutes
console.log(Math.floor(Date.now() / 1000 / 60));

// convert in to hours
console.log(Math.floor(Date.now() / 1000 / 60 / 60));

let newDate = new Date();
console.log(newDate); // current date and time

console.log(newDate.getFullYear()); // current year
console.log(newDate.getMonth()); // current month , month start from 0 
console.log(newDate.getDay()); // current day of the week

newDate.toLocaleString("default", {
    weekday: "long" 
});