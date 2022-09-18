/**
 * In this challenge, you will determine whether a string is funny or not
 * 
 * To determine whether a string is funny, create a copy of the string in reverse e.g. "abc" -> "cba".
 * Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to
 * the end. If the list of absolute differences is the same for both strings, they are funny.
 * 
 * 
 * For example, given the string s="lmnop" the ordinal values of the charcters are [108,109,110,111,112] sReverse=”ponml” and the ordinals are 
 * [112, 111,110,109,108]. The absolute differences of the adjacent elements for both strings are [1,1,1,1], so the answer is Funny.
 * 
 */

let funnyString = function(str) {
  let count = 0;
  let j = str.length - 2;

  for (let i = 1; i < str.length; i++) {
    let diff1 = Math.abs(str[i].charCodeAt() - str[i - 1].charCodeAt());
    let diff2 = Math.abs(str[j].charCodeAt() - str[j + 1].charCodeAt());
    if ( diff1 === diff2 ) {
      count++;
    }
    j--;
  }

  if (count === str.length - 1) {
    return "Funny";
  } else {
    return "Not funny";
  }
}

console.log(funnyString("bcxz"));
console.log(funnyString("acxz"));

