//global scope
// let a=10
// const b=20
var c=30

//block scope
if(true){
    let a=10
    const b=20
    var c=30
}


// console.log(a);
// console.log(b);
// console.log(c);

// .....................................................


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //6

function addone(num){
    return num + 1
}
addTwo(5) //it will not work bcz the variable is not initialized.
const addTwo = function(num){
    return num + 2
    
}
