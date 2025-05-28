
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




