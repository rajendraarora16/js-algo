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
