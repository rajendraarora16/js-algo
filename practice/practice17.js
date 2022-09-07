let arr1 = [3, 5, 3, 2, 12];
let arr2 = [1, 3, 2, 5, 2];

/**
 * Sum of two array
 */
Array.prototype.sumOfArrays = function(arr) {
    let sum = this.map(function(num, index) {
        return num + arr[index];
    });
    return sum;
}
console.log(arr1.sumOfArrays(arr2));

Array.prototype.sum = function(arr) {
    let sum2 = this.map ((num, index) => num + arr[index]);
    return sum2;
}
console.log(arr1.sum(arr2));

let sum2 = arr1.map((num, index) => num + arr2[index]);
console.log(sum2)