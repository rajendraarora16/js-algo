/*
Let's take a look in this array 

[5, 7, 9, 11, 15, 17, 21];

Here in above 13 and 19 odd numbers are missing with the sequence, so the output should be [13, 19].
*/


let missingOddNum = function (arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = current + 2;
        let lastElement = arr[arr.length - 1];

        if (arr[i + 1] !== next && current < lastElement) {
            result.push(next);   
        }
    }
    return result;
}

let arr = [5, 7, 9, 11, 15, 17, 21];

console.log(missingOddNum(arr));
// Output:
// [13, 19]
