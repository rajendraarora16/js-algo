/**
 * Quick sort algorithm 
 * 
 * The worst-case time complexity of Quick Sort is O(n^2) i.e Big O of n square. 
 * The average case time complexity is O(nlogn). 
 * 
 */


/**
 * Quick sort recursive
 */
let quickSortRecursive = function(arr) {

    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[0];

    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
}

let unsortedArr = [5, 455, 2, 6, 9, 6, 3, 1, 4, 2, 5, 7, 3, 4, 1, 10, 98];
console.log(quickSortRecursive(unsortedArr));

 
