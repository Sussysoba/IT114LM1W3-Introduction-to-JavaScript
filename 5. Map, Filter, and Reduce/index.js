/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
let times2 = numbers.map(item => item * 2)
console.log(times2)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
let filter = numbers.filter(item => item % 2 === 0)
console.log(filter)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
let less = numbers.reduce(function (result, item) {
    return result + item
}, 0 )
console.log(less)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hola', 'mundo'];
// Your code here
let CAPSLOCK = words.map(item => item.toUpperCase())
console.log(CAPSLOCK)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
let quatro = words.filter(item => item.length >= 4)
console.log(quatro)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
let combination = words.reduce(function (result, item) {
    return result + item
})
console.log(combination)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Map applies functions to each element within an array, Filter employs a conditional function to selectively include elements, and Reduce consolidates the array values into a single result.