let hashMap = {};
let res = [];

let findDuplicate = function(arr) {

    arr.forEach(value => {
        if(hashMap[value]) {
            res.push(value);
        } else {
            hashMap[value] = true;
        }
    });
    return res;
}


let arr = [6, 4, 4, 3, 2, 2, 1];
console.log(findDuplicate(arr));
console.log(hashMap);
