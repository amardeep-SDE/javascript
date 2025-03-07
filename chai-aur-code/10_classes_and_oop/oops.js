// object literal
const user = {
  userName: "amardeep",
  loginCount: 0,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user detail from DB");
    // console.log(`User name is ${this.userName}`);
    console.log(this);
    
    
  },
};


console.log(user.userName);
// console.log(user.getUserDetails()); // user());
// console.log(this); // {}

// cunstructer function

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello ${this.userName}`);
        
    }

     return this; // also by default return 
}

// const userOne = User("amardeep", 0, true);
// const userTwo = User("dwivedi", 1, false); // override all user data,userone override thtas why we use NEW keyword


// constructor function always return new instance
const userOne = new User("amardeep", 0, true);
const userTwo = new User("dwivedi", 1, false); 
console.log(userOne);
console.log(userTwo);

// about new keyword
// 1. new keyword create new empty object
// 2. new keyword call constructor function
// 3. constructor function always return new instance


