class User {
    constructor(username) {
        this.username = username

    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
    static createId(){ // static lagane se is id ka refrence sab object ko ni milega  - TypeError: amardeep.createId is not a function
        return `2123`
    }
}
const amardeep = new User("amardeep");
// console.log(amardeep.createId());

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email
    }
}
const iphone = new Teacher("iphone", "8qK0I@example.com");
console.log(iphone.createId()); // TypeError: iphone.createId is not a function bcz static method is not inherited
iphone.logMe();