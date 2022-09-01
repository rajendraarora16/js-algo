/**
 * Sliding window problem
 */

function maxSumArr (arr, size) {
    let tempSum = 0;
    let maxSumValue = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        tempSum += arr[i];

        if (i >= (size - 1)) {
            maxSumValue = Math.max(tempSum, maxSumValue);
            tempSum -= arr[i - (size-1)];
        }
    }

    return maxSumValue;
}

let arr = [1, 2, 3, 5, 4, 8, 6, 2];
let size = 3;

console.log(maxSumArr(arr, size));
