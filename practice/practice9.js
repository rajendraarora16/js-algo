/**
 * Algorithm to find the max value from the given string
 * @param {*} str 
 * @returns 
 */

function maxConsecutiveCharacter(str) {
    let maxNum = 0;
    let tempNum = 0;
    let hashMap = {};
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            tempNum++
            hashMap[str[i]+''+i] = tempNum;
        } else {
            if (tempNum > maxNum) {
                maxNum = Math.max(maxNum, tempNum);
                hashMap[str[i]] = maxNum;
            }
            tempNum = 0;
        }
    }
    let objVal = Object.values(hashMap);
    let max = 0;
    for (let k = 0; k < objVal.length; k++) {
        if (objVal[k] > max) {
            max = Math.max(objVal[k], max);
        }
    }

    let ObjValue = Object.keys(hashMap).find(k => hashMap[k] == max);
    return ObjValue.replace(/\d+/g, '');
}

let str = "AAAAAAABBBAAACCCCADVBBDADADADDDDDDDDDSSSSSSSSSEEERR,ASDDDDQQQ";
console.log(maxConsecutiveCharacter(str));

let str2 = "RAJENDRAARORA1234345545534343434";
console.log(str2.replace(/\d+/g, ''));
