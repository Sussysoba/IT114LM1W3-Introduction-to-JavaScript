/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0])
console.log(numbers[4])
console.log(numbers[numbers.length-1])
// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let min = 1 
let max = 1
let avg = 0
for(i of numbers){
    if (min > i){
        min = i
    }if (max < i){
        max = i
    }
    avg += i / numbers.length
}
console.log(min)
console.log(max)
console.log(avg)
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Python lists and JavaScript arrays share similarities as ordered, dynamically resizable collections with mixed types. Differences include syntax, indexing, and built-in features. Python lists offer slicing and more methods, while JavaScript arrays feature functional methods like map and filter. Both are mutable, but the choice depends on the language and specific requirements.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let IT114L = {
    coursecode:"IT114L",
    name:"WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
    units: 1,
    noStudents: 40
}
// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professor = "Job Lipat"
console.log(IT114L.professor)
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let secondTerm = [
    HUM039 = {
        courseCode: "HUM039",
        name: "Ethics",
        units: 3,
        totalStudents: 34,
        professor: "Mylah Nazario"
    },
    IT133 = {
        courseCode: "IT133",
        name: "Technopreneurship",
        units: 3,
        totalStudents: 25,
        professor: "Khristian Kikuchi"
    },
    IT114 = {
        courseCode: "IT114",
        name: "Web Systems and Technologies",
        units: 2,
        totalStudents: 37,
        professor: "Mark Hernandez"
    },
    IT114L,
    CS107 = {
        courseCode: "CS107",
        name: "Information Management",
        units: 2,
        totalStudents: 39,
        professor: "Dahlia De Mesa"
    },
    CS107L = {
        courseCode: "CS107L",
        name: "Information Management (Laboratory)",
        units: 1,
        totalStudents: 25,
        professor: "Adomar Ilao"
    },
    IT132 = {
        courseCode: "IT132",
        name: "Logic Design and Switching Theory",
        units: 2,
        totalStudents: 41,
        professor: "Leonnel De Mesa"
    },
    IT132L = {
        courseCode: "IT132L",
        name: "Logic Design and Switching Theory (Laboratory)",
        units: 1,
        totalStudents: 41,
        professor: "Leonnel De Mesa"
    }
]
// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnit = 0
for(let sub of secondTerm){
    totalUnit += sub.units
}
console.log(totalUnit)
// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Same as dictionaries, both serve as key value stores, allowing to associate values with unique keys.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let newNum = [...numbers, 28]
console.log(newNum)
// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let {coursecode, units, ...blank} = IT114L
console.log(coursecode, units)