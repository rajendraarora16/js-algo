/**
 * 
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * 
 * Input: nums = [1,2,3,4] 
 * Output: [1,3,6,10] 
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]
 * 
 * 
 */

let sumOf1dArray = function (arr) {
    let result = [];
    let initialValue = 0;
    let sum = arr.reduce(function(previousVal, currentVal, index) {
        return result[index] = previousVal + currentVal;
    }, initialValue);

    return result;
}

let nums =  [1,2,3,4];
console.log(sumOf1dArray(nums));