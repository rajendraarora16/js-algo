/**
 * Given the string, create a new array and iterate the loop value and remove duplication elements
 */

var arr = [1,3,[2,5,7],4,[6, 7],[9,10,8], [5, 7, 2, 20, 5, 8, 8, 2, 11, 4]];

let result = [];
function printVal(arr) {
    for(let i = 0; i < arr.length; i++ ) {
        if(arr[i].length) {
            printVal(arr[i]);
        } else{ 
            if (result.indexOf(arr[i]) == -1) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}
console.log(printVal(arr));