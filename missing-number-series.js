const findMissingNumber = (arr) => {
    // sort first...
    arr.sort((a, b) => a - b);

    let result = [];

    for (let i = 0 ; i < arr.length - 1 ; i++) {
        if (!(arr[i + 1] - arr[i] == 1)) {
            result.push(arr[i] + 1);
        }
    }

    return result;
}

let arr = [3, 0, 1, 5];
console.log(findMissingNumber(arr)); // [2, 4]
