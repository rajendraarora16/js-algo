let arr1 = [3, 5, 3, 2, 12];
let arr2 = [1, 3, 2, 5, 2];


/**
 * Calculating the sum of "arr1" fastly
 */
let initialValue = 0;
let sum = arr1.reduce((a, b) => a + b, 0);
console.log(sum);

/**
 * Calculating the sum of "arr1" using loop
 */
let sum2 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum2 += arr1[i];
}
console.log(sum2);

/**
 * Calculating sum of two array "arr1 + arr2"
 */
let sum3 = arr1.map(function (num, index) {
    return num + arr2[index];
});
console.log(sum3);

/**
 * Alternative, caluclating sum of two array "arr1 + arr2"
 */
Array.prototype.sumArray = function (arr) {
    let sum4 = this.map(function(num, index) {
        return num + arr[index];
    });
    return sum4;
}
console.log(arr1.sumArray(arr2))
