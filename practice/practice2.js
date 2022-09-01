function findMaxSubArrSum(arr, size) {

    let tempArrSum = 0;
    let maxSumArr = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        tempArrSum += arr[i];

        if (i >= (size - 1)) {
            maxSumArr = Math.max(tempArrSum, maxSumArr);
            tempArrSum -= arr[i - (size - 1)];
        }
    }
    return maxSumArr;
}


let arr = [1, 2, 3, 5, 4, 8, 6, 2];
let size = 3;

console.log(findMaxSubArrSum(arr, size));
