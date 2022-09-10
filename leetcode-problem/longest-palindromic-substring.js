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
            
            console.log(str.substring(i, j + 1))
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
 */
let longestPalindrome2 = function (str) {

    if (str == null || str.length == 0) {
        return '';
    }

    let start = 0, end = 0;

    for (let i = 0; i < str.length; i++) {

        let len1 = expandFromCenter(str, i, i);
        let len2 = expandFromCenter(str, i, i + 1);
        let len = Math.max(len1, len2);

        if (len > (end - start)) {
            start = (i - (len - 1)) / 2;
            end = (i + len) / 2;
        }
    }

    return str.substring(start, end + 1);
}
let expandFromCenter = function (str, start, end) {
    let L = start;
    let R = end;

    while (L >= 0 && R < str.length && str[L] == str[R]) {
        L--;
        R++;
    }

    return R - L + 1;
}

console.log(longestPalindrome2('cbbd'));

