const name="Dpka" //const can't be edited later , block scope
let roll=76 // block scope
var grade=9 //
mark=99

console.log(name,roll,grade,mark);
console.table([name,roll,grade,mark]);
//  SCOPE-------
/*
Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:

Block scope
Function scope
Global scope
....................................................................
If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
....................................................................................
	Scope	Redeclare	Reassign	Hoisted	Binds this
var	No	Yes	Yes	Yes	Yes
let	Yes	No	Yes	No	No
const	Yes	No	No	No	No
............................................................
 Using a let variable before it is declared will result in a ReferenceError:
 carName = "Saab";
let carName = "Volvo";
 


*/
