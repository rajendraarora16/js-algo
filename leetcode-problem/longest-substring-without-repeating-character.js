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


/**
 * Optimal solution using "Sliding window technique"
 * 
 */

const lengthOfLongestSubString = (str) => {
    // Sliding window technique
    
    let left = 0;
    let right = 0;
    let maxLength = 0;
    
    if (str === "" || !str) {
        return maxLength;
    }

    const char = new Set();

    while (right < str.length) {

        if (!char.has(str[right])) {
            char.add(str[right]);
            maxLength = Math.max(maxLength, char.size);
            right++;
        } else {
            char.delete(str[left]);
            left++;
        }
    }

    return maxLength;
}

console.log(lengthOfLongestSubString("bbbbbbbb")); // 1
