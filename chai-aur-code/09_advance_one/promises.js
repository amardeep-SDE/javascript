// promises - used to handle asynchronous operations, it is a object
// states of promises
// 1. pending - initial state, not yet fulfilled or rejected
// 2. fulfilled - completed successfully
// 3. rejected - something went wrong

// make promise
// 1. in two parts , take variable
const promiseOne = new Promise((resolve, reject) => {
  // DB an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("async task completed");
    resolve();
  }, 2000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});

// 2 in single part - without variable
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 consumed");
});

// 3.
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('async task 3 completed');
    resolve({ username: "amardeep", email: "8qK0I@example.com" });
  }, 3000);
});
promiseThree.then(function (user) {
  console.log("promise 3 consumed", user);
});

// 4. promise - error handling
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "amardeep", email: "8qK0I@example.com" });
    } else {
      reject("error in promise 4");
    }
  }, 1000);
});

// not work
// const username =  promiseFour.then((user) =>{
//     console.log('promise 4 consumed', user);
//     return user.username

// })
// changing
promiseFour
  .then((user) => {
    console.log("promise 4 consumed", user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(function () {
    console.log("The promise either resolved or rejected");
  })

  // 5.
  const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
          resolve({ username: "javascript", password: "123" });
        } else {
          reject("js went wrong");
        }
      }, 1000);
  })

  // other way to handle promise
  
  async function consumePromiseFive(){
  
    try {
        const user = await promiseFive;
        console.log(user);
    } catch (error) {
        console.log(error);
    
  }
}
consumePromiseFive()

async function getAllUsers(){
   
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // await na lagane pe promise pending dega
        console.log(data);
    } catch (error) {
        console.log(error);
    
  } 
}
getAllUsers();

// or using .then , .catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.