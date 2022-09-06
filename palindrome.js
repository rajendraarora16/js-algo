/**
 * Palindrome JS example
 * E.g: 'madam' and 'noon'
 */

let reverse = function (str) {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }
}

console.log(reverse("abc"));
