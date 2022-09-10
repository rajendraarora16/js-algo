
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

let longestPalindrom = function (str) {

    if (str == null || str.length < 2) {
        return '';
    }

    let longest = '';

    for (let i = 0; i < str.length; i++) {
        let oddPalindrome = expandFromCenter(str, i, i);
        let evenPalindrome = expandFromCenter(str, i, i+1);

        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

let expandFromCenter = function (str, left, right) {
    
    while (left >= 0 && right < str.length && str[left] == str[right]) {
        left--;
        right++;
    }
    return str.substring(left + 1, right);
}


console.log(longestPalindrom('cbbd'));
