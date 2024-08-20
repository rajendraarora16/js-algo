// High order function..
const multiply = (x) => {
    return x * 2;
}

const applyDoubleFunc = (arr, func) => {
    return arr.map(func);
}

const arr = [2, 3, 4, 5, 6, 7, 8, 4, 2];

const doubleArr = applyDoubleFunc(arr, multiply);
console.log(doubleArr);

// output
//
// [ 4, 6, 8, 10, 12, 14, 16, 8, 4 ]
