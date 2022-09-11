/**
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 */

let isValid = function (str) {    
    let char = [];
    let map = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    };
    for (let i = 0 ; i < str.length; i++) {
        console.log(map[str[i]]);

        if (map[str[i]]) {
            char.push(map[str[i]]);
        } else {
            if (char.pop() != str[i]) {
                return false
            }
        }
    }
    return char.length == 0;
}
console.log(isValid("()"));

