/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

// const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
var randomNumber = 51
// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber >= 50){
    console.log("More than fifty")
}
// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 === 0){
    console.log("Even")
}else{
    console.log("Odd")
}
// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 === 0 && randomNumber % 5 === 0){
    console.log("fizzbuzz")
}else if (randomNumber % 3 === 0){
    console.log("fizz")
}else if (randomNumber % 5 === 0){
    console.log("buzz")
}else{
    console.log(randomNumber)
}
let toDisplay = randomNumber
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log("toDisplay", toDisplay);
var num7 = randomNumber % 2 === 0 ? "Even" : "Odd"
console.log(num7)

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: the switch case statement is used to execute a block of code from multiple expressions. If a match is found, the related block of code is executed. :O

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for(x = 1; x <= n; x++){
    console.log(x)
}
const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let y = 0
while(y != list.length){
    console.log(list[y])
    y+=1
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The main difference is that a "while" loop checks the condition before executing the code inside it, while a "do-while" loop checks the condition after executing the code, ensuring the code is executed at least once.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for(z of list){
    console.log(z)
}
// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for(z in list){
    console.log(z)
}
// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach((p)=>console.log(p))
// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: Use for-of for iterating over values in iterable objects, Use for-in for iterating over keys in objects, Use .forEach for iterating over elements in arrays when you want a concise syntax and don't need to break out of the loop.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try{
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
}catch{
    console.log("Divided by zero")
}finally{
    console.log("cleaning up resources")
}