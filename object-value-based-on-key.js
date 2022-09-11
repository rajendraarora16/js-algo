function findKeyName(searchKey, obj) {
    let foundVal = Object.keys(obj).find(k => obj[k] == searchKey);
    return foundVal;
}

let obj = {a: 1,b: 2, c: 3, d: 4, e: 5};
let searchKey = 3;
console.log(findKeyName(searchKey, obj));
