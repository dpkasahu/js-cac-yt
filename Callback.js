// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished.
 function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// myDisplayer is a called a callback function.

// It is passed to myCalculator() as an argument.
