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
 */
let arrayOfNumbers = [1, 2, 3, 4];

let sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
    return accumulator + currentValue;
});
console.log(sum);
