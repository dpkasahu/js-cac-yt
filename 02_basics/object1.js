// singleton {cant access key value when it have two names}
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "bapun",
    "full name": "Bapun houdhary",
    [mySym]: "mykey1",
    age: 24,
    location: "Bhadrak",
    email: "bapun@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email="dpkasahu@dy.com"
// Object.freeze(JsUser)
JsUser.email="dpkasahu@db.com"
// console.log(JsUser);

JsUser.greet=function(){
    console.log("Hello Deepika");
}
JsUser.greettwo=function(){
    console.log("Hello Deepika, ${this.name}");
}


