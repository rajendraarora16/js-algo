/**
 * 
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Example 1:
 * 
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * Input: s = "cbbd"
 * Output: "bb"
 * 
 */


/**
 * Brute force approach
 * T complexity would be O(n ^ 3)
 */
let longestPalindrome1 = function(str) {
    let maxStr = '';
    let maxLen = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {

            if (isPalindrome(str.substring(i, j + 1))){
                
                if ((j + 1 - i) > maxLen) {
                    maxLen = j + 1 - i;
                    maxStr = str.substring(i, j + 1);
                }
            }
        }
    }
    return maxStr;
}
let isPalindrome = function(str) {
    let length = str.length;

    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false
        }
    }
    return true;
}

console.log(longestPalindrome1('cbbd'));


/**
 * Optimized solution
 * 
 * Time complexity - O(n ^ 2)
 * 
 * Suppose we will have two examples here with odd and even scenarios:
 * 
 * Example 1 is even scenario:
 * 
 *   a b b a
 *   ^
 *         ^
 * 
 * Example 2 is odd scenario:
 * 
 *   a  b  a
 *      ^
 * 
 */
let longestPalindrome2 = function (str) {
    if (str == null || str.length == 0) {
        return '';
    }

    let longest = '';

    for (let i = 0; i < str.length; i++) {

        let oddPalindrome = expandFromCenter(str, i, i);
        let evenPalindrome = expandFromCenter(str, i, i + 1);
        
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
    return str.slice(left + 1, right);
}

console.log(longestPalindrome2('cbbd'));

