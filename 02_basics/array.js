//array
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";


const myArr=[0,1,2,3,4,5]
const myheros=["xhj","ghh","fggh"]
const myArr2=new Array(1,2,3,4)
// console.log(myheros[2])
// console.log(myArr[2])
console.log(myArr2[2])

// Array methods

myArr.push(6) // Adds a new element
myArr.push(7)
myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);
 

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// converts an array to a string 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
// ++++++++++++++++=keypoints+++++++++++++++++++++++
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

// Create an array with one element:
const points = [40];

// Basic Array Methods
Array length 
Array toString() // converts an array to a string
Array at() //  returns an indexed element from an array
Array join() //  joins all array elements into a string , fruits.join(" * ");
Array pop() // Popping items out of an array, removes the last element from an array
Array push() // pushing items into an array , adds a new element to an array (at the end)
Array shift() // removes the first array element and "shifts" all other elements to a lower index.
Array unshift() // adds a new element to an array (at the beginning), and "unshifts" older elements:
Array delete() // Using delete() leaves undefined holes in the array.
Array concat() //method creates a new array by merging (concatenating) existing arrays
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
Array copyWithin() // copies array elements to another position in an array
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.
Array flat() // creates a new array with sub-array elements concatenated to a specified depth

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
//  const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
//1,10,2,20,3,30,4,40,5,50,6,60(output)

Array splice() //adds new items to an array
Array toSpliced() //The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array
Array slice()//slices out a piece of an array into a new array
