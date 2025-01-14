const isUserloggedIn = true
const temperature = 40

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

const score = 20
let power="cry"

if (score > 100) {
    let power = "fly"
    // console.log(`User power1: ${power}`);
}

// console.log(`User power: ${power}`);


/////////////////////////////////////////////////////////////////////

// const balance = 100

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


//'''''''''''''''''''''''''''''''''''''''''''''''''''''''
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}