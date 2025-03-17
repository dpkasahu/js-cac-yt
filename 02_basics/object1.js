// singleton {cant access key value when it have two names}
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "bapun",
    "full name": "Bapun prusty",
    [mySym]: "mykey1",
    age: 24,
    location: "Bhadrak",
    email: "bapun@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email) // bapun@google.com
// console.log(JsUser["email"]) //bapun@google.com
// console.log(JsUser["full name"]) //Bapun prusty
// console.log(JsUser[mySym]) //mykey1

JsUser.email="dpkasahu@dy.com"
// Object.freeze(JsUser) // cant propagate any changes
JsUser.email="dpkasahu@db.com"
// console.log(JsUser);

JsUser.greet=function(){
    console.log("Hello Deepika");
}
console.log(jsUser.greet()); //undefined if freeze will not remove , Hello Deepika
JsUser.greettwo=function(){
    console.log("Hello Deepika, ${this.name}");
} //Hello Deepika bapun


