/**
 * Map
 * 
 * The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.
 * It doesn't affect the original array.
 */

let list = ['A', 'B', 'C', 'D'];

let newArray = list.map (memeber => {
    return memeber + " is joined text";
});
console.log(newArray);


/**
 * Reduce
 * 
 * The .reduce() method iterates through an array and returns a single value.
 * 
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue);
 */
let arrayOfNumbers = [1, 2, 3, 4];

let sum = arrayOfNumbers.reduce((previousValue, currentValue) => {  
    return previousValue + currentValue;
});
console.log(sum);


/**
 * Filter
 * 
 * The filter() method executes a callback function and iterates over every items inside a target array.
 */
let people = [
    {name: "aaron",age: 65},
    {name: "beth",age: 2},
    {name: "cara",age: 13},
    {name: "daniel",age: 3},
    {name: "ella",age: 25},
    {name: "fin",age: 1},
    {name: "george",age: 43},
]

let toddlers = people.filter(person => person.age <= 3)

console.log(toddlers);

