
// js is a Synchronous and single threaded language. <synchronous = each operation waits for the last one to complete before executing>
// Blockin code = block the flow of program = Sync
// Non-Blocking code = Does not block execution = Async 


//Type 1 by declaring the variable name like promiseOne
const promiseOne = new Promise(function(resolve,reject){
  setTimeout(function() => {
    console.log('Async task is completed');
    resolve()
  }, 1000)
})
promiseOne.then(function(){
  console.log("promise completed")
})

//Type 2 without declaring the variable name
 new Promise(function(resolve,reject){
   setTimeout(function(){
     console.log("Async task 2");
     resolve()
   },2000)
 })
.then(function(){
  console.log("Async task 2 is completed")
})

//Type 3 using resolve instead of console .log

new Promise (function(resolve,reject){
  setTimeout(function(){
    resolve({username:"Deepika" , email: "Dpka@example.com"})
  }, 1000)
})
.then(function(user){
  console.log(user);
}) 

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function () {
    let error = true
    if(!error){
      resolve({username:"Deepika" ,  email:"deepika@gmail.com"})
    }
    else{
      reject ('ERROR :something went wrong')
    }
  },1000)
  promiseFour
  .then((user) => {
    concole.log(user);
    return user.username
  })
  .catch(function(error) {
    console.log(error)
  })
  .finally (() => console.log(" It will execute for sure"))


  //using Async and Await
  
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
async function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log(response);
  }
  catch(error){
    console.log(error)
  }
}

consumePromiseFive()

  // async function getAllUsers(){
  //   try{
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //   catch(error){
  //     console.log("E: " , error);
  //   }
  // }

  // getAllUsers()
  

fetch('https://api.github.com/users/hiteshchoudhary'){
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
}
.catch((error) => console.log(error))
                                

