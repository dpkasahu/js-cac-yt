const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 

// console.log(marvel_heros); // array under array(output)
// console.log(marvel_heros[3][1]); // flash output

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // will return a new array.

const all_new_heros = [...marvel_heros, ...dc_heros] //best method(... is spread operator)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/


console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting , output = []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // retuens a new array from set of element
//[100,200,300]
