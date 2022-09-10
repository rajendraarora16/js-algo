/**
 *  3. Longest Substring Without Repeating Characters
 * 
 *  Input: s = "abcabcbb"
 *  Output: 3
 *  Explanation: The answer is "abc", with the length of 3.
 */


let lengthOfLongestSubstring = function (s) {
    let left = 0;
    let right = 0;
    let max = 0;

    let seen = new Set();

    while (right < s.length) {
        
        let c = s.charAt(right);
        
        if (!seen.has(c)) {
            seen.add(c);
            max = Math.max((right - left + 1), max);
            right++;
        } else {
            while (s.charAt(left) != c) {
                seen.delete(s.charAt(left));
                left++;
            }
            seen.delete(c);
            left++;
        }
    }

    return max;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
