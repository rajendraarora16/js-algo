/**
 * Approach 1 if we have given a searchCharacter in parameter argument.
 */
let findMaxValueFromString1 = function (searchKey, str) {
    
    let counter = 0;
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == searchKey) {
            counter++;
        } else {
            if (counter > result) {
                result = counter;
            }

            counter = 0;
        }
    }
    return result;
}
let str1 = "RRADASDSDADDDDDDDSSSSAAAAAAAQQWWWWWWWWWWQQQQQQQQQ";
console.log(findMaxValueFromString1('R', str1));



/**
 * Approach 2 if we don't need to pass any searchCharacter as parameter
 */

let findMaxValueFromString2 = function(str) {
    
    let counter = 0;
    let maxNum = 0;
    let hashMap = {};

    for (let i = 0;  i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter++;
            hashMap[str[i]+ '' +i] = counter + 1;
        } else {
            if (counter > maxNum) {
                maxNum = counter;
                hashMap[str[i]+ '' +i] = maxNum;
            }
            counter = 0;
        }
    }
    console.log(hashMap);
    let objKey = Object.keys(hashMap);
    let objVal = Object.values(hashMap);
    let maxVal = 0;

    for (let i = 0; i < objVal.length; i++) {
        if (objVal[i] > maxVal) {
            maxVal = objVal[i];
        }
    }

    let maxValKey = objKey.find(k => hashMap[k] == maxVal);

    return maxValKey.replace(/\d+/g, '');
}

let str2 = "RRADASDSDADDDDDDDSSSSAAAAAAAQQWWWWWWWWWWQQQQQQQQQ";
console.log(findMaxValueFromString2(str2));