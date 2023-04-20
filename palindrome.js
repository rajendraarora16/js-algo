/**
 * Palindrome JS example
 * E.g: 'madam' and 'noon'
 */

let palindrome = function (str) {
    let length = str.length;
    for (let i = 0; i < length/2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return "string is not palindrome";
        }
    }
    return "string is palindrome";
}

console.log(palindrome("aca"));
// string is palindrome


/**
 * Longest palindrome
 *
 * longestPalindrome("abracadabra"))
 * Output: aca
 */
let longestPalindrome = function(str) {
  let maxPalindrome = "";
  let maxLength = "";

  for (let i = 0; i < str.length; i++) {
    let subs = str.substr(i, str.length);

    for (let j = subs.length; j >= 0; j--) {
      let subSubStr = subs.substr(0, j);

      if (subSubStr.length <= 1) {
        continue;
      }

      if (isPalindrome(subSubStr)) {
        if (subSubStr.length > maxLength) {
          maxLength = subSubStr.length;
          maxPalindrome = subSubStr;
        }
      }
    }
  }
  return maxPalindrome;
}

let isPalindrome = function(str) {
  let reverse = str.split("").reverse().join("");
  return str === reverse;
}

console.log(longestPalindrome("21323sdsdesdsdarorasdsdsdasd"));
// arora
console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
// 12345678987654321

