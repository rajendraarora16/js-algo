let checkPalindrome = function (str) {
    
    for(let i = 0; i < str.length - 1; i++) {
        if (str[i] == str[i + 1]) {
            return str[i]+''+str[i + 1];
        }
    }
    return false;
}

console.log(checkPalindrome("babad"));
