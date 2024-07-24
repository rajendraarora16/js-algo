
// 1st Approach..

const findMissingValue = (arr) => {

    // Sort it..
    arr.sort((a, b) => a - b);
    
    let oddArr = [];
    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];

    for (let i = firstElement; i <= lastElement; i++) {
        if (i % 2 === 1) {
            oddArr.push(i);
        }
    }

    const missingValue = oddArr.filter( item => !arr.includes(item) )[0];
    
    return missingValue;
}

let arr = [5, 11, 7, 9, 15, 17];
console.log(findMissingValue(arr)); // 13

// 2nd approach..

const findMissingValue2 = (arr) => {

    // Sort.. 
    arr.sort((a, b) => a - b);

    let missingValue = [];

    console.log(arr)

    for (let i = 0 ; i < arr.length - 1 ; i++) { 
        
        if (arr[i + 1] - arr[i] !== 2) {
            missingValue.push(arr[i] + 2);
        }
    }

    return missingValue;
}

arr = [5, 11, 7, 9, 15, 17];
console.log(findMissingValue2(arr)); // [13]

