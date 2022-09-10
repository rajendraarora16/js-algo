/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 * 
 *  Input: nums = [2,7,11,15], target = 9
 *  Output: [0,1]
 *  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * 
 */

 let twoSum = function(nums, target) {
    for (let i=0 ; i < nums.length; i++ ) {
        for (let j=0; j < nums.length; j++) {

            if (nums[i] + nums[j+1] == target && (i != j+1)) {
                return [i, j+1];
            }
        }
    }
};

let arr = [2,5,5,11];
console.log(twoSum(arr, 10))

/**
 * Solution with improvement above
 */
 let sumOfTwoArr = function (num, target) {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
}

let arr2 = [3, 5, 3, 1, 4, 5, 9];
let target2 = 9; 

console.log(sumOfTwoArr(arr2, target2))



/**
 * 
 * Alternative solution
 *
 */
 var twoSumSolution2 = function(nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if(typeof hashMap[nums[i]] !== 'undefined') {
            return [hashMap[nums[i]], i];
        } else {
            hashMap[target - nums[i]] = i;
        }
    }
    return [];
};

let arr3 = [2,5,5,11];
console.log(twoSum(arr3, 10))
