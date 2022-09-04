/**
 * Sliding window program
 */

function maxArrVal (arr, size) {
    let tempSumArr = 0;
    let maxSumArr = -Infinity;

    for (let i=0; i<arr.length; i++) {

        tempSumArr += arr[i];

        if (i >= (size - 1)) {
            maxSumArr = Math.max(tempSumArr, maxSumArr);
            tempSumArr -= arr[i - (size - 1)];
        }
    }

    return maxSumArr;
}

let arr = [1, 2, 3, 5, 4, 8, 6, 2];
let size = 3;

console.log(maxArrVal(arr, size));
