/**
 * Time complexity O(n^2) and O(1) space time complexity
 */
const twoSum = (arr, target) => {
  
  for (let i = 0 ; i < arr.length ; i++) {

    for (let j = i + 1 ; j < arr.length ; j++) {

      if (arr[i] + arr[j] === target) {

        return [arr[i], arr[j]];
      }
    }
  }

  return false;
}

let arr = [0, -1, 2, -3, 1];
let target = -2;

console.log(twoSum(arr, target));


/**
 * 
 * Time Complexity: O(n) as the loops runs at most n times. We either increase left, or decrease right or stop the loop.
 * Auxiliary Space: O(1)
 * 
 */
const twoSum = (arr, target) => {

  arr.sort((a, b) => a - b);

  let left = 0; 
  let right = arr.length - 1;

  while (left < right) {

    let sum = arr[left] + arr[right];
    
    if (sum === target) {
      return true;
    } 

    else if (sum < target) {
      left++;
    } 
    else {
      right--;
    }
  }

  return false;
}

let arr = [0, -1, 2, -3, 1];
let target = -2

console.log(twoSum(arr, target));

