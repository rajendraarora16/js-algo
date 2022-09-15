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
}


let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));

