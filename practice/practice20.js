
/**
 * 
 *  even example
 *    a  b  b  a 
 *    ^        ^ 
 *      
 * 
 *  odd example
 *    a   b   a
 *    ^
 *            ^
 *
 */
let longestPalindrome = function (str) {
    let longString = '';

    for (let i = 0; i < str.length; i++) {
        let evenPalindrome = expandFromCenter(str, i, i);
        let oddPalindrome = expandFromCenter(str, i, i + 1);

        if (evenPalindrome.length > longString.length) {
            longString = evenPalindrome;
        }

        if (oddPalindrome.length > longString.length) {
            longString = oddPalindrome;
        }
    }
    return longString;
}

let expandFromCenter = function (str, left, right) {
    while (left >= 0 && right < str.length && str[left] == str[right]) {
        left--;
        right++;
    }

    return str.substring(left + 1, right);
}

console.log(longestPalindrome('cbbd'));
