/**
 * Palindrome JS example
 * E.g: 'madam' and 'noon'
 */

let checkPalindrome = function (str) {
    let mid = Math.floor(str.length / 2);

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("madam"));
