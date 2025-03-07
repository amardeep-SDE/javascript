class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        // super ni tha to call method karna padta tha 
        super(username); // super keyword is used to call parent class
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher('Chai', '8qK0I@example.com', '12345')
console.log(chai);
chai.logMe();
chai.addCourse();

const masalaChai = new User('Masala Chai')
// masalaChai.addCourse();
masalaChai.logMe();

console.log(chai  === masalaChai); // false
console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true



