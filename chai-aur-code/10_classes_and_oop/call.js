function SetUsername(userName){
    // complex DB calls
    this.userName = userName
    console.log('called');
    
}

function createUser(username, email, password){
    this.email = email;
    this.password = password;
    SetUsername.call(this, username);

}

const chai = new createUser("hitesh", "hitesh@gmail", "1234");
console.log(chai);