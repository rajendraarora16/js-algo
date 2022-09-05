

let addTwoNum = function (l1, l2) {
    var l1Sort = reverseArray(l1);
    var l2Sort = reverseArray(l2);

    var sumNum = parseInt(l1Sort.join(''))+parseInt(l2Sort.join(''));
    var result = Array.from(String(sumNum), Number).reverse();
    return result;
}

var reverseArray = function (arr) {
    var reverseArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}



let l1 = [2,4,3];
let l2 = [5,6,4];

console.log(addTwoNum(l1, l2));
