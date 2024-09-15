/**
 * 1 st way to flat
 * 
 * input = [[[[0]], [1]], [[[2], [3]]], [[4], [5]]]
 * output = [0, 1, 2, 3, 4, 5]
 */

let input = [[[[0]], [1]], [[[2], [3]]], [[4], [5]]];

let flatArray = function (input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      result = result.concat(flatArray(input[i]));
    } else {
      result.push(input[i]);
    }
  }

  return result;
}
console.log(flatArray(input))
// output = [0, 1, 2, 3, 4, 5]


/**
 * 2nd approach
 */
let input2 = [1, [2, [3, 4], 5], 6];

let flattenArray2 = function(input) {
  let reduceWay = input.reduce((acc, val) => 
    Array.isArray(val)
      ? acc.concat(flattenArray2(val))
      : acc.concat(val),  
    []
  );
  return reduceWay;
}

console.log(flattenArray2(input2));
// output 
// [ 1, 2, 3, 4, 5, 6 ]


/**
 * 3rd simple approach..
 */


