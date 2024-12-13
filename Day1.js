// What is JavaScript?
// JavaScript is a programming language used primarily for web development. 
// It enables interactivity, dynamic content, and functionality in websites.

// Variables and Types
let userAge = 25; // A numerical value representing someone's age
let userName = "John Doe"; // A string value representing a person's name

console.log(userAge); // Output the age
console.log(userName); // Output the name

// Comments in JavaScript
/* 
The following function demonstrates basic arithmetic operations 
using two variables num1 and num2.
*/

// Operations
let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division

// Data Types
let exampleString = "Hello!"; // String
let exampleNumber = 42; // Number
let exampleBoolean = true; // Boolean
let exampleArray = [1, 2, 3]; // Array

console.log(exampleString); // Output string
console.log(exampleNumber); // Output number
console.log(exampleBoolean); // Output boolean
console.log(exampleArray); // Output array

// Explanation:
// - String: Text values enclosed in quotes.
// - Number: Numeric values (integers or decimals).
// - Boolean: Represents true or false.
// - Array: Collection of multiple values.

// Functions in JavaScript
function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser("Alice")); // Call the function and display the result

// if Else in JavaScript
let temperature = 35; // A numerical value for temperature

if (temperature > 30) {
    console.log("It's hot outside!"); // If temperature is greater than 30
} else {
    console.log("The weather is nice."); // If temperature is 30 or below
}

// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i); // Output numbers from 1 to 5
}

// Loose vs Strict Equality
/* 
Loose equality (==): Compares two values after converting their types if necessary.
Strict equality (===): Compares two values without type conversion, ensuring both type and value match.
*/

console.log(5 == "5"); // true (loose equality, type coercion)
console.log(5 === "5"); // false (strict equality, no type coercion)

// Example Explanation:
// - Loose equality converts types before comparison.
// - Strict equality requires both type and value to match.





// let e=10;
// var str = "OOMBU";
// console.log(e);
// console.log(str);
// console.log(`this message fucks you....${str}`);

// int , number

// let num=10;

// console.log(typeof num);

// let Xrp = "coin";

// console.log(typeof Xrp);

// let Dogewins = "True" ;

// // console.log(typeof Dogewins);

// let a = 10;
// let b=90;
// console.log(`The value is ${a + b}`);

// functions

function greeting(){

    str = "hellow world"
    console.log(str);

}

greeting();

function add(num1,num2){

    str = "Adding"
    console.log(`the values is ${num1 + num2}`);

}

add(20,54334);

// if else

let age = 14;

if(age>=18){
    console.log("eligible");
}

else{
    console.log("not eligible");
}

// for loop
for(let i=0; i <= 5 ; i++){
    console.log(`the values is ${i}`);
}


