/**
 * Count the number of occurrence in string with character;
 * @param {*} str 
 * @returns 
 */

function checkRepeatativeString(str) {
    let seen = new Set();
    let hashMap = {};
    let counter = 1;

    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            hashMap[str[i]]++;
        } else {
            seen.add(str[i]);
            hashMap[str[i]] = counter;  
        }
    }
    return hashMap;
}

let str = "BAABBBAAAAACCCCCBDDDDEEEEEEE,FFF";
console.log((checkRepeatativeString(str)));