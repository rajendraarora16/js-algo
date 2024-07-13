/**
 * reverse string
 */

 let reverseString = function (str) {
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    return result.join('');
}
console.log(reverseString("abc"));


/**
 * Reverse number
 * 
 * Formula explanation
 * 
 * 123 - number
 * 
 * 1st Step:
 * digit = 3
 * reverse = (0 * 10) + 3 = 3
 * num = 123/10 = 12
 * 
 * 2nd Step:
 * digit = 2
 * reverse = (3 * 10) + 2 = 32
 * num = 1
 * 
 * 3rd Step:
 * digit = 1
 * reverse = (32 * 10) + 1 = 321
 * num = 0
 * 
 * Hence reverse will be "321"
 * 
 */
let reverseNum = function (num) {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = (reverse * 10) + digit;
        num = parseInt(num / 10);
    }
    return reverse;
}
console.log(reverseNum(1234));




/**
 * Reverse String/number 
 * Using swapping method with while loop
 */
let reverseNumProcess = function (arr) {

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    /* Swapping */
    [arr[left], arr[right]] = [arr[right], arr[left]];
    
    left++;
    right--;
  }

  return arr;
}
console.log(reverseNumProcess([8, 3, 2, 1, 6, 5, 2, 9, 12]));
// [ 12, 9, 2, 5, 6, 1, 2, 3, 8 ]

console.log(reverseNumProcess(["A", "B", "C", "D"]));
// [ 'D', 'C', 'B', 'A' ]



/**
 Reverse string
 
 "This is Javascript code"
 
 "sihT si tpircsavaJ edoC"
 */
const str = "This is Javascript Code";
const arrStr = str.split(" ");

console.log(str.split(" "))
// [ 'This', 'is', 'Javascript', 'Code' ]

let result = [];

for (let i = 0; i < arrStr.length; i++) {
    result.push(arrStr[i].split('').reverse().join(""));
}

console.log(result.join(" "));

/*
   Expected output 
   'sihT si tpircsavaJ edoC'
*/
