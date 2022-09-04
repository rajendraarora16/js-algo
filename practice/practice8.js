/**
 * Given the string "BBBBAAAABBAAAAAACCCCCBDDDDEEEEEEE,FFF".. let's find the most repeatative occurence.
 * 
 * @param {*} str 
 * @returns 
 */

function checkRepeatativeString(str) {
    let hashMap = {};
    let seen = new Set();
    let counter = 1;
    let maxValue = 1;
    let isPreviousValueSame = false;
    let isNextValueSame = true;

    for (let i = 0; i < str.length; i++) {
        /**
         * is previous value same
         */
        if (str[i] == str[i-1]) {
            isPreviousValueSame = true;
        }
        /**
         * is next value same
         */
        if (str[i] == str[i+1]) {
            isNextValueSame = true;
        }

        if (seen.has(str[i]) && isPreviousValueSame) {
            hashMap[str[i]][0]++;
            hashMap[str[i]][1]++;
            isPreviousValueSame = false;
        } else if(seen.has(str[i]) && !isNextValueSame) {
            maxValue = Math.max(hashMap[str[i]][1], maxValue);
            counter = 0;
            hashMap[str[i]] = [counter, maxValue];
        } else {
            maxValue = Math.max(maxValue, counter);
            seen.add(str[i]);
            hashMap[str[i]] = [counter, maxValue];
            isPreviousValueSame = false;
        }
    }
    return hashMap;
}

let str = "BBBBAAAABBAAAAAACCCCCBDDDDEEEEEEE,FFF";
console.log(checkRepeatativeString(str));

let hashMap = checkRepeatativeString(str);

console.log(hashMap['B']);
