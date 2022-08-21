
let findDuplicate = function(arr) {
    let res = [];
    arr.sort();
    
    for (let i=0 ; i < arr.length ; i++ ) {
        if (arr[i] == arr[i - 1]) {
            res.push(arr[i]);
        }
    }
    return res;
}


let arr = [6, 4, 4, 3, 2, 2, 2, 1];
console.log(findDuplicate(arr));
