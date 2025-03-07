// ES6

class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }
}
const chai = new User('Chai', '8qK0I@example.com', '12345')
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene
// function User(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
// }
// // ye User function object ki taraha behave kar raha h isliye .prototype ka kaam kar raha hu
// User.prototype.encryptPassword = function () {
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function () {
//     return `${this.userName.toUpperCase()}`
// }

// const tea = new User('Tea', '8qK0I@example.com', '12345')
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());