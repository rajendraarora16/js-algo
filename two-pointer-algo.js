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

