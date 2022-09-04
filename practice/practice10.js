/**
 * Sliding window algorithm
 */

function slidingWindow(size, arr) {

    let arrTempSum = 0;
    let maxSumSeen = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        arrTempSum += arr[i];

        if (i >= (size - 1)) {
            maxSumSeen = Math.max(maxSumSeen, arrTempSum);
            arrTempSum -= arr[i - (size - 1)];
        }
    }
    return maxSumSeen;
}

let arr = [1, 2, 3, 5, 4, 8, 6, 2];
console.log(slidingWindow(3, arr));
