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
 */

let longestPalindrome = function(str) {
    for (let i = 0; i < 10; i++) {
        for (let j = i+1; j < 10; j++) {
            console.log(i);
            console.log(j);
        }
    }
}
console.log(longestPalindrome('rajendra'));
