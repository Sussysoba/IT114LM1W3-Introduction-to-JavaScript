/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var lalakiako = true
console.log(lalakiako)
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let babaeako = false
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const transako = "Maybe?"
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is a global keyword, let is a local keyword and const is an unchanging keyword

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
var num1 = 69
var num2 = 420
console.log(num1 + num2)
console.log(num1 * num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)
// Checkpoint 1.2 What operators did you use?
// Answer: Everything that I usually use last term :>
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
var greet = "Hola"
var greet2 = "Amigo"
console.log(greet + greet2)
// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
var num3 = 69
var num4 = 420
if (num3 || num4 === 69){
    console.log("No")
}
// Checkpoint 1.4 What operators did you use?
// Answer: or or or or


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
var num5 = 69
var num6 = 420
if (num5 < num6){
    console.log("Yes please")
}

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: in JavaScript, it's like checking if an empty array is kinda like "false," I guess? But here's the twist – JS tries to be okay and converts both sides to a common type for the comparison. So it turns the empty array into 0 then it checks if it's equals to false so that answer is true.
// Your code here