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
