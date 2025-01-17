// for of

//[" ", " "," "]
//[{},{},{}]

const array=[1,2,3,4,5]

// for (let i=0;i<=array.length;i++){
//     console.log(array[i]);   
// }

for(const num of array){
    // console.log(num);
}

// const name= "Deepika Sahu"
for (const n of name){
    // console.log(n);
}

//to write name in one line(3 method )
const name = "Deepika Sahu";
let result = "";
for (const n of name) {
    result += n;
}
console.log(result);

// const name = "Deepika Sahu";
for (const n of name) {
    process.stdout.write(n);
}

// const name = "Deepika Sahu";
console.log(name.split("").join(" "));
// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject1 = {
    game1: 'Deepika',
    game2: 'Bapun'
}

// for (const [key, value] of myObject1) {
//     console.log(key, ':-', value);
    //(will give error bcz objects cant be used )
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }