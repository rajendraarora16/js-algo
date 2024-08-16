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


// Without recursive way..

const unFlatArr = [5, 2, 4, 5, [24, 45], [[33, [345, [65, [654, [6433]]]]]]];

const flat = (arr) => {
    let result = [];
    let stack = [...arr]; // Copied Arr into stack
    
    while (stack.length > 0) {

        if (Array.isArray(stack[0])) {
            stack.push(...stack[0]);
            stack.shift();
        } else {
            result.push(stack.shift());
        }

    }

    return result;
}

console.log(flat(unFlatArr)); 
// [ 5, 2, 4, 5, 24, 45, 33, 345, 65, 654, 6433 ]

