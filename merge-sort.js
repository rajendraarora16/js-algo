/**
 * Merge sort Algorithm
 * 
 * The worst-case time complexity of Merge Sort O(nlogn) the same as quick sort algorithm
 * It is the fastest sorting algorithm
 */

let merge = function(left, right) {
    let arr = [];

    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}

let mergeSort = function (arr) {

    if (arr.length < 2) {
        return arr;
    }

    let half = Math.floor(arr.length / 2);
    let left = arr.splice(0, half);
    
    return merge(mergeSort(left), mergeSort(arr));
}

let array = [5, 455, 2, 6, 9, 6, 3, 1, 4, 2, 5, 7, 3, 4, 1, 10, 98];
console.log(mergeSort(array));
