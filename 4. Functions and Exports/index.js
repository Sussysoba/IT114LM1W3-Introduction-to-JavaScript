/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

function greet(name) {
    console.log("Hello,", name,)
}

greet("Matt")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: a declaration is the creation of the function, while expression is where the assignments of the function is found

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

function calculateArea(length, width) {
    let calculateArea = length * width
    console.log("The area is:", calculateArea)
}

calculateArea(15,10)

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: it is a function which is to be executed after another function has finished execution.

// One example is:

/*function add(x, y, callback) {
    const sum = x + y;
    callback(sum);
  }
function display(result) {
    console.log('The result is:', result);
  }
add(69, 420, display);*/

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here


function modifyArray(element, callback) {
    for (let i in element) {
        array[i] = callback(element[i])
    }
}

function displayArray(element) {
    return element+=1
}

let array = [1,2,3,4,5]

modifyArray(array, displayArray)
console.log(array)

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

import { 
    adds, 
    pi 
} from "./mathUtils.js"

console.log(pi)
console.log("The Answer is:", adds(1,3))


// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

import {
    isPalindrome
} from "./isPalindrome.js"

console.log(isPalindrome("racecar"))
console.log(isPalindrome("racecars"))

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: require and module.exports are used to share code across files. In my opinion i think using import export is better because from what I've seen it has more uses than the latter, a good example is tree-shaking which can make bundles sizes smaller