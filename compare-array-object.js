

let arr1 = [1, 3, 5, 6, 7, 5, 1];
let arr2 = [1, 3, 5, 6, 7, 5, 1];


const checkArrayEqual = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false;
    }

    const arr = arr1?.every((item, index) => item === arr2[index]);
    return arr;
}

console.log(checkArrayEqual(arr1, arr2)); // true


//----------------------------------------------

const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };


const checkObjectEqual = (obj1, obj2) => {

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

console.log(checkObjectEqual(objA, objB)); // true
