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
