const name = "bapun"
const repoCount = 50

// console.log(name + repoCount + " Value");   //old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//new one
const gameName = new String('bapun-ykp-com')

// console.log(gameName[0]); // output:b
// console.log(gameName.__proto__); // output: {}


// console.log(gameName.length); // output: 13
// console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2)); //output:p
console.log(gameName.indexOf('p')); //output: 2

const newString = gameName.substring(0, 4) // no negative value
console.log(newString); // bapu

const anotherString = gameName.slice(-13, 4)
console.log(anotherString); // bapu

const newStringOne = "   deepika    "
console.log(newStringOne); //   deepika    
console.log(newStringOne.trim());//deepika

const url = "https://dpka.com/bapun%20deepikasahu"

console.log(url.replace('%20', '-')) // https://dpka.com/bapun-deepikasahu

console.log(url.includes('prusty'))//false

console.log(gameName.split('-')); // [ 'bapun', 'ykp', 'com' ]
