// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
//++++++++++++++++++++++++++++Get Date Methods++++++++++++++++++++++++++++++++++++
// In JavaScript, date objects are created with new Date().

// new Date() returns a date object with the current date and time.
const d = new Date();
d.getFullYear();
let ms = Date.now();
// Date.now() is a static method of the Date object.

// You cannot use it on a date object like myDate.now().

// The syntax is always Date.now().
const d = new Date("January 01, 2025");
d.setFullYear(2020);

// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (yyyy)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)
