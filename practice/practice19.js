let sumOfTwoArr = function (num, target) {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
}

let arr = [3, 5, 3, 1, 4, 5, 9];
let target = 9; 

console.log(sumOfTwoArr(arr, target))
