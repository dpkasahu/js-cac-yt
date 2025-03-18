const user = {
    username: "deepika",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "ykp"
// user.welcomeMessage()

// // console.log(this);

// function chai(){
//     let username = "deepika"
//     console.log({this.username});
// }

// chai()

// const chai = function () {
//     let username = "yami"
//     console.log(this.username);
// }

//+++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++
//() => {}

const chai =  () => {
    let username = "gugu"
    console.log(this); //{}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicive return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "bapun"}) // to return object we have to write {}


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
