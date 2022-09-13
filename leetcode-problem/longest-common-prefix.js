/**
 * Longest Common Prefix
 * 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 */

/**
 * Approach 1
 */
let longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs[0].length; i++) {
        
        let tempChar = strs[0][i];
        
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].length == i || strs[j][i] != tempChar) {
                return strs[0].substring(0, i);
            }    
        }
    }
    
    return strs[0];
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));



/**
 * Approach 2
 */
let longestCommonPrefix2 = function(strs) {
    let res = strs[0];

    for(let i = 0; i < strs.length; i++) {

        while (true) {
            if (strs[i].startsWith(res)) {
                break;
            } else {
                if (res.length == 1) {
                    return "";
                }
                res = res.substring(0, res.length - 1);
            }
        }
    }
    return res;
}

let strs2 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix2(strs2));

