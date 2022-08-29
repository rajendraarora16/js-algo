function maxSumArr(arr, size) {

    let arrSumTemp = 0;
    let maxSumSeen = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        arrSumTemp += arr[i];

        if (i >= (size - 1)) {
            maxSumSeen = Math.max(arrSumTemp, maxSumSeen);
            arrSumTemp -= arr[i - (size - 1)];
        }
    }
    return maxSumSeen;
}

let arr = [1, 2, 3, 5, 4, 8, 6, 2];
let size = 3;

console.log(maxSumArr(arr, size))


/**
 * Learnt from this youtube link:
 * https://www.youtube.com/watch?v=JWHjqjk9ZYc
 */
