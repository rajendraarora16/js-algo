const longestCommonPrefix = (arr) => {

    if (!arr.length) return "";

    let prefix = "";

    for (let i = 0 ; i < arr[0].length; i++) {
        
        const char = arr[0][i];

        for (let j = 0 ; j < arr.length ; j++) {

            if ( arr[j][i] !== char ) {
                return prefix;
            }
        }

        prefix += char;
    }
    
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// output
// "fl"
