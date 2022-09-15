let longestCommonPrefix = function(str) {
    
    
    for(let i = 0 ; i < str[0].length; i++) {
        let tempChar = str[0][i];

        for (let j = 0; j < str.length; j++) {
            if (str[j].length == i || str[j][i] != tempChar) {
                return str[0].substring(0, i);
            }
        }
    }
    return str[0];
}

let strs = ["flsower", "flsow", "flsight"];
console.log(longestCommonPrefix(strs));
