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
////API V8 ENGINE 
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState); //readyState property indicates the status of the request. 
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText) // If we dont convert into json the data will be in string format , so we cant get the data so we have to type cast to object that is json.
            console.log(typeof data);
            console.log(data.followers);
        }
    }
    xhr.send();
